const express= require("express");
const app=express();
const UserRoute= require("./routes/UserRoute")
const dotenv=require('dotenv');
const connectDb=require('./config/mongos')
const cors=require('cors')



dotenv.config()
app.use(cors({
    origin:[process.env.CLIENT],
    credentials:true
})

)

app.use("/api/user",UserRoute)


connectDb()

const PORT=process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
})
