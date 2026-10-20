const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://firstSample:YOPqHZAbSAfrnPw5@sample-cluster.abrkvoc.mongodb.net/project-1");

    console.log("Connected to DB")
}

module.exports = connectDB;