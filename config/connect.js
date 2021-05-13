const mongoose=require('mongoose');

require('dotenv').config({path: './config/.env'})


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI ,{ useNewUrlParser: true , useUnifiedTopology: true})
console.log('mongoose connected')
    }catch{
console.log('error')
    }
}
module.exports=connectDB;
