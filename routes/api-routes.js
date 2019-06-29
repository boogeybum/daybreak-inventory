require("dotenv").config();
// const sequelize = require("axios");
const db = require("../models");
const path = require("path");
const Op = db.Sequelize.Op;


module.exports = function(app) {
    /* CUSTOMER ROUTES */
 
 
 
    /* LOT ROUTES */
    // list all lots
    app.get("/api/lots", (req, res) => {
        console.log("in API get findall lot");
        db.Lot.findAll()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });
    //save lot
    app.post("/api/lots", (req, res) => {
        console.log("in API post add lot");
        db.Lot.create(req.body).then(
            (result) => {
                console.log(result);
                res.json({result});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });
    // delete lot
    console.log("in API delete lot");
    app.delete("/api/lot/:id", (req, res) => {
        const lot_id = req.params.id;
        db.Lot.destroy({
            where:{
                id: lot_id
            } 
        })
        .then(
            (result) => {
                res.json({successful: result});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });  
    //find one LOT  
    app.get("/api/lot/:id", function(req, res) {
        const lot_id = req.body.id;
        console.log("in API put update lot");

        db.Lot.findAll({
          where: {
            id: lot_id
          }
        })
        .then((result) => {
          res.json(result);
        })
        .catch(
            (err) => {
                res.json({error: err});
            }
        );
      });
    //UPDATE LOT  
    app.put("/api/lot/", function(req, res) {
        console.log("in API put update lot");

        db.Lot.update({
          count: req.body.count,
          cost: req.body.cost,
          purchasedate: req.body.purchasedate,
          color: req.body.color  
        }, {
          where: {
            id: {[Op.eq]: req.body.id} 
          }
        }).then((result) => {
          res.json(result);
        }).catch(
            (err) => {
                res.json({error: err});
            }
        );
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
    //         (result) => {
    //             console.log(result.data.items);
    //             res.json(result.data.items);
    //         }
    //     )
    //     .catch(
    //         (error) => {
    //             res.json({error: error});
    //         }
    //     )
    // });
    //GET SAVED BOOKS
 
 


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