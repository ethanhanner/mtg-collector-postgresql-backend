module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define('card', {
    name: {
      type: Sequelize.STRING
    },
    set_code: {
      type: Sequelize.STRING(10)
    },
    isFoil: {
      type: Sequelize.BOOLEAN
    },
    image_uri: {
      type: Sequelize.STRING
    },
    cmc: {
      type: Sequelize.DECIMAL
    }
  });
  return Card;
};