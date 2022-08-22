const mongoose=require('mongoose')

const DB=process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log("Successful")
}).catch((err)=>console.log('Unsuccessful'))
