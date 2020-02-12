const { Pass, Resort } = require('./models/models.js');
const { db } = require('./connection.js');

Pass.hasMany(Resort);
Resort.belongsTo(Pass);

module.exports = {
  Pass,
  Resort,
  db,
};
