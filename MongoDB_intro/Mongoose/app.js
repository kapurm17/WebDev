const mongoose = require("mongoose");

// Open the db connection
mongoose.connect('mongodb://localhost:27017/shopDb', {useNewUrlParser: true, useUnifiedTopology: true});

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: Number
});

const product = mongoose.model("product", productSchema);

const prod = new product({
  _id: 2,
  name: "Pencil",
  price: 12
});

//prod.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Makes a collection with plural form of Person
const Person = mongoose.model("people", personSchema);

const john = new Person({
  name: "John",
  age: 37
});

// Insert Many
const mayank = new Person({
  name: "mayank",
  age: 22
});

const meemansa = new Person({
  name: "meemansa",
  age: 17
});


// Person.insertMany([mayank, meemansa], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

// Read from the database

Person.find(function(err, people) {
  if(err) {
    console.log(err);
  } else {

    //Close connections
  //  mongoose.connection.close();

    for(let i=0; i<people.length; i++) {
        console.log(people[i]["name"]);
    }

  }
});

// Update

Person.updateOne({name: "mayank"}, {age: 25}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Update successful");
  }
});


// Loop through entries to get names and age
Person.find(function(err, people) {
  if(err) {
    console.log(err);
  } else {

    //Close connections
    //mongoose.connection.close();

    for(let i=0; i<people.length; i++) {
        console.log(people[i]["name"] + " " + people[i]["age"]);
    }
  }
});
