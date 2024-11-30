const mongoose=require("mongoose");


mongoose.connect("")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));
