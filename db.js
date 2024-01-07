const mongoose=require("mongoose")
var mongoUrl="mongodb+srv://lakshmi:lakshmi@cluster0.s842ipy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Database Connected")

})

.catch(err =>
    {
        console.log(err)
    })

    module.exports=mongoose