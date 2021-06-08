// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const CardFace = sequelize.define('card-face', {
    part_of: {
      type: Sequelize.UUID // the id of the Card this face is a part of
    },
    name: {
      type: Sequelize.STRING
    },
    colors: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    flavor_text: {
      type: Sequelize.STRING
    },
    image_uri: {
      type: Sequelize.STRING
    },
    mana_cost: {
      type: Sequelize.STRING
    },
    oracle_text: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    subtype: {
      type: Sequelize.STRING
    }
  });
  return CardFace;
};