require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");
// const router = require("express").Router();

module.exports = function(app) {
    /* CUSTOMER ROUTES */
 
 
 
    /* LOT ROUTES */
    // RETURNS LIST OF LOTS
    app.get("/api/lots", (req, res) => {
        console.log("in API method lot");
        db.Lot.findAll()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });
    //SEARCH
    // app.post("/search", (req, res) => {
    //     console.log("in api-routes");
    //     //replace spaces with (+) in the title
    //      console.log(req.body);
    //     // console.log(req.body.title);
    //     let bookTitle = req.body.title.replace(/\s/g,"+");
    //     console.log(bookTitle);
    //     axios.get(
    //         `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
    //     ).then(
    //         (response) => {
    //             console.log(response.data.items);
    //             res.json(response.data.items);
    //         }
    //     )
    //     .catch(
    //         (error) => {
    //             res.json({error: error});
    //         }
    //     )
    // });
    //SAVE BOOK
    // app.post("/api/books", (req, res) => {
    //     db.Book.create(req.body).then(
    //         (response) => {
    //             res.json({successful: response});
    //         }
    //     ).catch(
    //         (err) => {
    //             res.json({error: err});
    //         }
    //     );
    // });
    //GET SAVED BOOKS
 
 
    //DELETE BOOK
    // app.delete("/api/books/:id", (req, res) => {
    //     db.Book.findByIdAndDelete(req.params.id).then(
    //         (response) => {
    //             res.json({successful: response});
    //         }
    //     ).catch(
    //         (err) => {
    //             res.json({error: err});
    //         }
    //     );
    // });    


    /* USER ROUTES */



    /* INVENTORY ITEM ROUTES */
    app.get("/api/inventoryitems", (req, res) => {
        db.Inventoryitem.findAll(
            {
            include: [
                db.Itemcategory,db.Lot
              ]
            }
            )
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });



    /* ITEM CATEGORY ROUTES */
    app.get("/api/itemcategory", (req, res) => {
        db.Itemcategory.findAll()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });




    /* PRICE RANGE ROUTES */



    /* INVOICE ROUTES */



    /* INVOICE ITEM ROUTES */



    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        console.log("route not found");
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}