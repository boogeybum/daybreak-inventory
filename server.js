const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// require("./routes/api-routes")(app);


var db = require("./models");
var _LOTS = require("./models/seedData/lot.json");
var _CUSTOMERS = require("./models/seedData/customer.json");
var _PRICERANGE = require("./models/seedData/pricerange.json");
var _ITEMCATEGORY = require("./models/seedData/itemcategory.json"); var _USERS = require("./models/seedData/users.json");
var _ITEMCATEGORY = require("./models/seedData/itemcategory.json"); var _INVENTORYITEMS = require("./models/seedData/inventoryitem.json");
var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize
  .sync(syncOptions)
  .then(function() {
      console.log("syncOptions.force: "+syncOptions.force);
      if(syncOptions.force === true) {
        db.Lot.bulkCreate(_LOTS)
        .then(function(lots) {
            console.log("success seeding LOTS " + lots);
        })
        .catch(function(error) {
            console.log(error);
        });
        db.Customer.bulkCreate(_CUSTOMERS)
        .then(function(customers) {
            console.log("success seeding CUSTOMERS " + customers);
        })
        .catch(function(error) {
            console.log(error);
        });
        db.Pricerange.bulkCreate(_PRICERANGE)
        .then(function(pricerange) {
            console.log("success seeding PRICERANGE " + pricerange);
        })
        .catch(function(error) {
            console.log(error);
        });
        db.Itemcategory.bulkCreate(_ITEMCATEGORY)
        .then(function(itemcategory) {
            console.log("success seeding ITEMCATEGORY " + itemcategory);
        })
        .catch(function(error) {
            console.log(error);
        });
        db.User.bulkCreate(_USERS)
        .then(function(users) {
            console.log("success seeding USERS " + users);
        })
        .catch(function(error) {
            console.log(error);
        });
        db.Inventoryitem.bulkCreate(_INVENTORYITEMS)
        .then(function(inventoryitems) {
            console.log("success seeding INVENTORYITEMS " + inventoryitems);
        })
        .catch(function(error) {
            console.log(error);
        });





    }
  });
  
//Connect to mongo db
// const mongoose = require("mongoose");
// const mongoURL = process.env.MONGODB_URI || "mongodb://user1:Password123@ds237267.mlab.com:37267/heroku_n56w7j3c";
// const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/google-book-search";
// mongoose.connect(mongoURL , {useNewUrlParser:true})
// .then(() => {
//   console.log("Successfully connected to Mongo DB");
// })
// .catch((err) => {
//   console.log(`Error connecting to Mongo DB: ${err}`);
// });


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
