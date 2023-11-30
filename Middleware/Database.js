const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://naman0908be21:naman@cluster0.peazls7.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));
