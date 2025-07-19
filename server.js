const express=require('express');
const aiRoutes=require('./src/routes/ai.routes.js');
const app=express();
const cors=require("cors");

app.use(cors());
app.use(express.json());

app.use('/ai',aiRoutes);


require('dotenv').config();

const PORT=process.env.PORT||3000;
app.listen(3000,'0.0.0.0', ()=>{
    console.log("PORT AT 3000");
})
