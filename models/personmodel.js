var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var perschema =new Schema({
    name: String,
    age: Number
});
module.exports = mongoose.model('person',perschema);