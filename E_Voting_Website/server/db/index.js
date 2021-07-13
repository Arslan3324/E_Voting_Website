const mysql = require('mysql')

const pool = mysql.createPool({

    connectionLimit:10,
    password:'',
    user:'root',
    database:'parties',
    host:'localhost',
    port:'3307'

})

let getAllParties = {}

getAllParties = ()=>{

    return new Promise((resolve,reject)=>{

        pool.query('Select * from party',(err, result)=>{
            if(err){reject(err)}
            resolve(result);
        })

    })


}
let getAllPTI = {}
getAllPTI = (id)=>{

    return new Promise((resolve,reject)=>{

        pool.query(`Select count(partyID) as count from party WHERE partyID = ${id}`,(err, result)=>{
            if(err){reject(err)}
            resolve(result);
        })

    })


}


async function postParties(party){

    try{
        const result = await pool.query('INSERT into party (partyID, cnic) VALUES (?,?)',[party.partyID,party.cnic]);

        let message = 'success';
        return {message}
    }

    catch{
        let message = 'Error'
        return message;
    }


}


module.exports = {getAllParties,postParties,getAllPTI}