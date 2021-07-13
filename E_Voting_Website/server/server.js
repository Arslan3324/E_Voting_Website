const express = require('express')
const apiRouter = require('./router')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/',apiRouter);
app.listen(process.env.PORT||'3001',()=>{

    console.log("Server is Runing", process.env.PORT||"3001");
})