module.exports = app => {
  const sets = require("../controllers/set.controller.js");

  var router = require("express").Router();

  // Create a new Set
  router.post("/", sets.create);

  // Retrieve all Sets
  router.get("/", sets.findAll);

  // Retrieve a single Set with code
  router.get("/:code", sets.findOne);

  // Update a Set with code
  router.put("/:code", sets.update);

  // Delete a Set with code
  router.delete("/:code", sets.delete);

  // Delete all Sets
  router.delete("/", sets.deleteAll);

  app.use('/api/sets', router);
};