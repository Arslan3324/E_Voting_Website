const express = require('express')
const db = require('../db')

const router = express.Router();


router.get('/getAllParties',async(req,res,next)=>{
    try{
        let results = await db.getAllParties();
        res.json(results)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500);
    }


})
router.get('/countByID/:id',async(req,res,next)=>{
    try{
        let results = await db.getAllPTI(req.params.id);
        res.json(results)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500);
    }


})


router.post('/postTeachers',async function(req, res, next){

    try{
        res.json(await db.postParties(req.body))
    }

    catch(err){
        console.log('Error')
        next(err);
    }

})


module.exports = router;