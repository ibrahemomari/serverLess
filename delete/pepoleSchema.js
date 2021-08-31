const dynamoose=require("dynamoose");

const pepoleSchema=new dynamoose.Schema({
    id:String,
    name:String,
    age:String,
    gender:String
});

module.exports=dynamoose.model('pepole',pepoleSchema);