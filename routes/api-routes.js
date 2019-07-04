require("dotenv").config();
// const sequelize = require("axios");
const db = require("../models");
const path = require("path");
const Op = db.Sequelize.Op;
const passport = require("../config/passport");


module.exports = function(app) {
    /* CUSTOMER ROUTES */
    // list all customer
    app.get("/api/customer", (req, res) => {
        console.log("in API get findall customer");
        db.Customer.findAll()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });
    //create new customer
    app.post("/api/customer", (req, res) => {
        console.log("in API post add customer");
        db.Customer.create(req.body).then(
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
    // delete customer
    console.log("in API delete customer");
    app.delete("/api/customer/:id", (req, res) => {
        const customer_id = req.params.id;
        db.Customer.destroy({
            where:{
                id: customer_id
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
    //find one customer  
    app.get("/api/customer/:id", function(req, res) {
        const customer_id = req.params.id;
        console.log("in API put update customer");

        db.Customer.findAll({
          where: {
            id: customer_id
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
    //UPDATE customer  
    app.put("/api/customer/", function(req, res) {
        console.log("in API put update customer");

        db.Customer.update({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          address: req.body.address,
          phone: req.body.phone  
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
 
 
 
    /* LOT ROUTES */
    // list all lots
    app.get("/api/lot", (req, res) => {
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
    //create new lot
    app.post("/api/lot", (req, res) => {
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
        const lot_id = req.params.id;
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
    

    /* USER ROUTES */
    //list all users
    app.get("/api/user", (req, res) => {
        db.User.findAll()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });

     //create new user
    app.post("/api/user", (req, res) => {
        console.log("in API post add user",req.body);
        db.User.create(req.body).then(
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
    // delete user
    console.log("in API delete user");
    app.delete("/api/user/:id", (req, res) => {
        const user_id = req.params.id;
        db.User.destroy({
            where:{
                userid: user_id
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
    //find one user  
    app.get("/api/user/:id", function(req, res) {
        const user_id = req.params.id;
        console.log("in API find one user");

        db.User.findAll({
          where: {
            userid: user_id
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
    //UPDATE user  
    app.put("/api/user/", function(req, res) {
        console.log("in API put update user");

        db.User.update({
          userid: req.body.userid,
          name: req.body.name,
          email: req.body.email,
          role: req.body.role,
          password: req.body.password
        }, {
          where: {
            userid: {[Op.eq]: req.body.userid} 
          }
        }).then((result) => {
          res.json(result);
        }).catch(
            (err) => {
                res.json({error: err});
            }
        );
      });



    /* INVENTORY ITEM ROUTES */
    //list all inventoryitems
    app.get("/api/inventoryitem", (req, res) => {
        db.Inventoryitem.findAll(
            {
            include: [db.Itemcategory,db.Lot]
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

    //create new inventoryitems
    app.post("/api/inventoryitem", (req, res) => {
        console.log("in API post add inventoryitem",req.body);
        db.Inventoryitem.create(req.body).then(
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
    // delete inventoryitem
    console.log("in API delete inventoryitem");
    app.delete("/api/inventoryitem/:id", (req, res) => {
        const inventoryitem_id = req.params.id;
        db.Inventoryitem.destroy({
            where:{
                id: inventoryitem_id
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
    //find one inventoryitem  
    app.get("/api/inventoryitem/:id", function(req, res) {
        const inventoryitem_id = req.params.id;
        console.log("in API find one inventoryitem");

        db.Inventoryitem.findAll({
          where: {
            id: inventoryitem_id
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
    //UPDATE inventoryitem  
    app.put("/api/inventoryitem/", function(req, res) {
        console.log("in API put update inventoryitem");

        db.Inventoryitem.update({
          id: req.body.id,
          totalinstock: req.body.totalinstock,
          totalsales: req.body.totalsales,
          price: req.body.price,
          LotId: req.body.LotId,
          ItemcategoryId: req.body.ItemcategoryId,
          PricerangeId: req.body.PricerangeId,
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














    /* ITEM CATEGORY ROUTES */
    //list all item category
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

     //create new itemcategory
    app.post("/api/itemcategory", (req, res) => {
        console.log("in API post add itemcategory");
        db.Itemcategory.create(req.body).then(
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
    // delete itemcategory
    console.log("in API delete itemcategory");
    app.delete("/api/itemcategory/:id", (req, res) => {
        const itemcategory_id = req.params.id;
        db.Itemcategory.destroy({
            where:{
                id: itemcategory_id
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
    //find one itemcategory  
    app.get("/api/itemcategory/:id", function(req, res) {
        const itemcategory_id = req.params.id;
        console.log("in API find one itemcategory");

        db.Itemcategory.findAll({
          where: {
            id: itemcategory_id
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
    //UPDATE itemcategory  
    app.put("/api/itemcategory/", function(req, res) {
        console.log("in API put update itemcategory");

        db.Itemcategory.update({
          count: req.body.description
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
    



    /* PRICE RANGE ROUTES */



    /* INVOICE ROUTES */



    /* INVOICE ITEM ROUTES */

     // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.NewUser.create(req.body).then(function () {
        res.send("Sign up successfull, click sign in to continue")
      res.end();
      //res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      // res.json(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });



    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        console.log("route not found");
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}