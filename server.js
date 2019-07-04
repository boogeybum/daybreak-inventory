const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

//dependencies for login
var session    = require('express-session')
var bodyParser = require('body-parser')
var passport   = require('passport')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define API routes here
require("./routes/api-routes")(app);
// app.use('/api/Itemcategory', require('./routes/api-routes'));


var db = require("./models");
var _LOTS = require("./models/seedData/lot.json");
var _CUSTOMERS = require("./models/seedData/customer.json");
var _PRICERANGE = require("./models/seedData/pricerange.json");
var _ITEMCATEGORY = require("./models/seedData/itemcategory.json");
var _USERS = require("./models/seedData/users.json");
var _INVENTORYITEMS = require("./models/seedData/inventoryitem.json");

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = false;
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
  
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
