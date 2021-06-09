module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define('card', {
    id: { // matches scryfall id
      type: Sequelize.UUID,
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
      type: Sequelize.ARRAY(Sequelize.STRING)
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
    frame_effects: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    card_faces: {
      type: Sequelize.ARRAY(Sequelize.INTEGER) // array of 2 integers that correspond to id's in the card-face table
    }
  });
  return Card;
};