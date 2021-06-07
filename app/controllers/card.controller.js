// https://bezkoder.com/node-express-sequelize-postgresql/

const db = require('../models');
const Card = db.card;
const Op = db.Sequelize.Op;

// Create and save a new Card
exports.create = (req, res) => {
  // Validate request
  if(!req.body.id) {
    res.status(400).send({
      message: "Card ID can not be empty!"
    });
    return;
  }

  // Create a Card
  const card = {
    id: req.body.id,
    name: req.body.name,
    set_code: req.body.set_code,
    isFoil: req.body.isFoil,
    isFullArt: req.body.isFullArt,
    image_uri: req.body.image_uri,
    cmc: req.body.cmc,
    colors: req.body.colors,
    layout: req.body.layout,
    mana_cost: req.body.mana_cost,
    type: req.body.type,
    subtype: req.body.subtype,
    rarity: req.body.rarity,
    oracle_text: req.body.oracle_text,
    price: req.body.price,
    flavor_name: req.body.flavor_name,
    flavor_text: req.body.flavor_text,
    frame_effect: req.body.frame_effect,
    card_faces: req.body.card_faces
  };

  // Save Card in the database
  Card.create(card)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Card."
      });
    });
};

// Retrieve all Cards from the database, or all Cards that match a name
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `${name}`} } : null;

  Card.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cards."
      });
    });
};

// Find a single Card with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Card.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Card with id= " + id
      });
    });
}

// Update a Card by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Card.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if(num == 1) {
        res.send({
          message: "Card was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Card with id= ${id}. Maybe Card was not found or req.body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Card with id= " + id
      });
    });
};

// Delete a Card with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Card.destroy({
    where: { id: id }
  })
    .then(num => {
      if(num == 1) {
        res.send({
          message: "Card was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Card with id= ${id}. Maybe Card was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Card with id= " + id
      });
    });
};

// Delete all Cards from the database
exports.deleteAll = (req, res) => {
  Card.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cards were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while removing all Cards."
      });
    });
};

// TODO: methods to get cards that are in a collection / have a tag
// but this is user specific so I'm going to need a User table, Collection table, Tag table
// not sure if those methods will be in the controllers for those tables or here