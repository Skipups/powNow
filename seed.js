// pass and resort info
const passList = [
  {
    id: 1,
    name: 'Ikon',
  },
  {
    id: 2,
    name: 'Epic',
  },
  {
    id: 3,
    name: 'Mountain Collective',
  },
];
//create see pass in DB

const { Pass, Resort } = require('./server/models/models');
const { db } = require('./server/db/index.js');
const resortList = [
  {
    name: 'Alta',
    location: [69.9687, 23.2715],
    closestAirCode: 'SLC',
    passId: 1,
  },
  {
    name: 'SnowBird',
    location: [40.5818948, -111.65520240000001],
    closestAirCode: 'SLC',
    passId: 1,
  },
  {
    name: 'Jackson Hole',
    location: [43.5875, 110.8279],
    closestAirCode: 'JAC',
    passId: 1,
  },
];
async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    console.log('seeding database');
    await Resort.bulkCreate(resortList);
    await Pass.bulkCreate(passList);
  } catch (e) {
    console.log(e);
  }
  console.log('done seeding and associating!');
}

module.exports = { syncAndSeedDatabase };
