const { db } = require('./connection.js');
const { Pass, Resort } = require('./models/models.js');

Pass.hasMany(Resort);
Resort.belongsTo(Pass);

module.exports = {
  Pass,
  Resort,
  db,
};
