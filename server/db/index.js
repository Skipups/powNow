const { Pass, Resort, AirportCode } = require('./models/models.js');
const { db } = require('./connection.js');

Pass.hasMany(Resort);
Resort.belongsTo(Pass);

module.exports = {
  Pass,
  Resort,
  AirportCode,
  db,
};
