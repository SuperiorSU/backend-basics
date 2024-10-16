const mongoose = require('mongoose');
require('dotenv').config()
const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connection is successfully set');
    }
    catch(err){
        console.log('Something went wrong',err);
    }
}


module.exports = dbConnect;