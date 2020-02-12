const Sequelize = require('sequelize');
const { db } = require('../connection.js');

// define pass model
const Pass = db.define('pass', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

// define resort model
const Resort = db.define('resort', {
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DECIMAL),
  },
  closestAirCode: {
    type: Sequelize.STRING,
  },
});

module.exports = { Pass, Resort };
