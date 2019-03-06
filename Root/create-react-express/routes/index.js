const path = require("path");
const router = require("express").Router();
const controller = require("./../controllers/controller.js")
router.use("/TEST", function(req,res){
    res.json({"passed" : true})
});

router.route("/api/books")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/books/:id"
router
  .route("/api/books/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);


module.exports = router;