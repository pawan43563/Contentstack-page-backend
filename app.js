const express=require("express")
const cors=require('cors')
require('dotenv').config({path:"./config.env"})
const app=express()
const csRouter=require("./routes/csrouter")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',csRouter)

const port = process.env.PORT || 3001; 

app.listen( port , ()=>{
    console.log(`server started at port ${port}`);
})
