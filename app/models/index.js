const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    freezeTableName: true // don't pluralize database table names
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.card = require('./card.model.js')(sequelize, Sequelize);
db.set = require('./set.model.js')(sequelize, Sequelize);
db.cardSymbol = require('./card-symbol.model.js')(sequelize, Sequelize);

module.exports = db;