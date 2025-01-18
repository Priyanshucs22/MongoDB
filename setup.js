const mongoose = require('mongoose');

// Connect to the MongoDB database
// 'mongodb://127.0.0.1:27017/mongopractice':
// - '127.0.0.1' is the localhost address
// - '27017' is the default MongoDB port
// - 'mongopractice' is the name of the database (created if it doesn't already exist)
// -  If you are accessing MongoDB from a different device on the same local network, you need to replace 127.0.0.1 with the IP address of the device hosting MongoDB.
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// Define the schema for the 'user' collection
const user  = mongoose.Schema({
    name:String,
    username:String,
    email:String
});

// Export the Mongoose model for the 'user' collection
// - The first argument 'user' is the name of the collection in the database
// - The second argument 'user' is the schema defined above
// - This model allows CRUD (Create, Read, Update, Delete) operations on the 'user' collection
module.exports = mongoose.model('user',user);