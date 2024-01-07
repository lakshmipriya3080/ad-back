const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lakshmi:lakshmi@cluster0.s842ipy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

const userSchema=mongoose.Schema(
    {
        
        id:
        {
            type:String,
            required:true
        },
    
        password:
        {
            type:String,
            required:true
        }
    },
    {
        timestamps:true

    }
)
var usersmodel =mongoose.model("admin",userSchema)
module.exports=usersmodel;
