import mongoose from "mongoose";

const listSchema = mongoose.Schema({
    inputText:String,
    done:{
        type:Boolean,
        default:false
    }
    // index:Number,
})

const List = mongoose.model("lists",listSchema)
export default List