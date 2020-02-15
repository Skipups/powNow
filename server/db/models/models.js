const Sequelize = require('sequelize');

const { db } = require('./../connection.js');

// define pass model
const Pass = db.define('pass', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: 'https://www.ikonpass.com/static/images/Facebook-Large.jpg',
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
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_W6Fk6zrahr6VC3fqDP_E09uhvTKf821sz1lbuf35ZqNUC0Xr',
  },
  closestAirCode: {
    type: Sequelize.STRING,
  },
});

module.exports = { Pass, Resort };
