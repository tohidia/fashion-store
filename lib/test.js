// const mongoose = require("mongoose");

// const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/<your-database-name>?retryWrites=true&w=majority";

// mongoose.connect(uri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });


// const mongoose = require("mongoose");

// // const uri = "mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/<your-database-name>?retryWrites=true&w=majority";

// // Replace <your-username>, <your-password>, and <your-database-name> with your actual MongoDB credentials
// const username = "your-username";
// const password = "your-password";
// const databaseName = "your-database-name";

// const uri = `mongodb+srv://${username}:${password}@cluster.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// mongoose.connect(uri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });


import mongoose from "mongoose";
// test.js
// const firebaseCredentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);
// console.log(firebaseCredentials);


const uri = "mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database-name?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
