const { UUID, DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define('card', {
    id: { // matches scryfall id
      type: UUID,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    set_code: { // matches a code from the set database
      type: Sequelize.STRING(10)
    },
    isFoil: {
      type: Sequelize.BOOLEAN
    },
    isFullArt: {
      type: Sequelize.BOOLEAN
    },
    image_uri: {
      type: Sequelize.STRING
    },
    cmc: {
      type: Sequelize.DECIMAL
    },
    colors: {
      type: DataTypes.ARRAY(STRING)
    },
    layout: {
      type: Sequelize.STRING
    },
    mana_cost: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    subtype: {
      type: Sequelize.STRING
    },
    rarity: {
      type: Sequelize.STRING(3)
    },
    oracle_text: {
      type: Sequelize.STRING(2048)
    },
    price: {
      type: Sequelize.DECIMAL(10, 2) // price valid as of the date in updatedAt
    },
    flavor_name: {
      type: Sequelize.STRING
    },
    flavor_text: {
      type: Sequelize.STRING
    },
    frame_effect: {
      type: Sequelize.STRING
    },
    card_faces: {
      type: DataTypes.JSON
      /* 
      name: string,
      colors: string,
      flavor_text: string,
      image_uri: string,
      mana_cost: string,
      loyalty: string,
      oracle_text: string,
      type: string,
      subtype: string
      */
    }
  });
  return Card;
};