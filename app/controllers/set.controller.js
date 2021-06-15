// https://bezkoder.com/node-express-sequelize-postgresql/


const db = require('../models');
const Set = db.set;
const Op = db.Sequelize.Op;
const fs = require("fs");

// Create and save a new Set
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Set code can not be empty!"
    });
    return;
  }

  // Create a Set
  const set = {
    code: req.body.code,
    name: req.body.name,
    release_date: req.body.release_date,
    icon_uri: req.body.icon_uri
  };

  // Save Set in the database
  Set.create(set)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Set."
      });
    });
};

// Retrieve all Sets from the database, or all Sets that match a code
exports.findAll = (req, res) => {
  const code = req.query.code;
  var condition = code ? { code: { [Op.iLike]: `%${code}%` } } : null;

  Set.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sets."
      });
    });
};

// Find a single Set with an id (code)
exports.findOne = (req, res) => {
  const code = req.params.code;

  Set.findByPk(code)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Set with code= " + code
      });
    });
};

// Update a Set by the id in the request
exports.update = (req, res) => {
  const code = req.params.code;

  Set.update(req.body, {
    where: { code: code }
  })
    .then(num => {
      if(num == 1) {
        res.send({
          message: "Set was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Set with code= ${code}. Maybe Set was not found or req.body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Set with code= " + code
      });
    });
};

// Delete a Set with the specified code in the request
exports.delete = (req, res) => {
  const code = req.params.code;

  Set.destroy({
    where: { code: code }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Set was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Set with code= ${code}. Maybe Set was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Set with code= " + code
      });
    });
};

// Delete all Sets from the database
exports.deleteAll = (req, res) => {
  Set.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Sets were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sets."
      });
    });
};

// exports.iconExists = (req, res) => {
//   const code = req.params.code;
// }

// TODO: method to get all sets released before or after a certain date?