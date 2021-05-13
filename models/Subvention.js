const mongoose =require('mongoose');

const SubventionSchema = new mongoose.Schema({
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'type'
    },

    name:{  type:String, required: true},
    imgUrl:{type:String },
    desc:{ type:String},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
  
  
        nameU : {type:String},
        emailU : {type:String},
        phoneU : {type: String},
    

});

module.exports = Subvention = mongoose.model('subvention',SubventionSchema)
