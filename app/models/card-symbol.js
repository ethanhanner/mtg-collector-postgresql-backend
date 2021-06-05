module.exports = (sequelize, Sequelize) => {
  const CardSymbol = sequelize.define("cardSymbol", {
    symbol: {
      type: Sequelize.STRING(11)
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