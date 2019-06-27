require("dotenv").config();
// const axios = require('axios');
const db = require('../models');
const path = require('path');

module.exports = function(app) {
  app.get("/api/itemcategory", (req, res) => {
    db.Itemcategory.findAll()
    .then(
      (result) => {
        res.json(result);
      }
    ).catch(
      (err) => {
        res.json({ error : err });
      }
    );  
  });

  // app.post("api/Itemcategory", (req, res) => {
  //   db.Itemcategory.create(req.body).then(
  //     (response) => {
  //       res.json({ successful : response });
  //     }
  //   ).catch(
  //     (err) => {
  //       res.json({ error : err });
  //     }
  //   );
  // });
  

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}