
const mongoose = require('mongoose')


const {Schema , model}=mongoose

const MsgSchema = new Schema ({
    title : {type : String , required : true},
    desc : {type : String , required : true},
    emailU:{type:String},
    sendAt: {
        type: Date,
        default: new Date()
  },
 

 
})


module.exports = Msg = model("msg", MsgSchema)
