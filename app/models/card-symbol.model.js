module.exports = (sequelize, Sequelize) => {
  const CardSymbol = sequelize.define("cardsymbol", {
    symbol: {
      type: Sequelize.STRING(11),
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING(500)
    },
    svg_uri: {
      type: Sequelize.STRING
    }
  });
  return CardSymbol;
};