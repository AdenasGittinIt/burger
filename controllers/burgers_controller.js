const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.selectAll(function(result) {
    let hbsObject = {
      burger: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = `id = ${req.params.id}`;

  console.log("condtion", condition);

  burger.updateOne( req, condition, function(result) {
    
      res.json(result)
    
  });
});
router.post("/api/burgers", function(req, res) {

 

  burger.create(req, function(result) {
    res.json(result)
    console.log(result)
  }) 
})

module.exports = router;

