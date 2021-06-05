module.exports = (sequelize, Sequelize) => {
  const Set = sequelize.define("set", {
    code: {
      type: Sequelize.STRING(10)
    },
    name: {
      type: Sequelize.STRING
    },
    release_date: {
      type: Sequelize.DATEONLY
    },
    icon_uri: {
      type: Sequelize.STRING
    }
  });
  return Set;
};