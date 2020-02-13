// pass and resort info
const passList = [
  {
    id: 1,
    name: 'Ikon',
    image:
      'https://www.shop-eat-surf.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-19-at-9.51.35-AM.png',
  },
  {
    id: 2,
    name: 'Epic',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdeCbnZOjikPfienIsc_5iWGOGg132wCHwV1rzgFyU-k6xkhnC',
  },
  {
    id: 3,
    name: 'Mountain Collective',
    image: 'https://mountaincollective.com/img/video-carousel/take-a-run.jpg',
  },
];
//create see pass in DB

const { Pass, Resort } = require('./server/db/models/models');
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
    await Pass.bulkCreate(passList);
    await Resort.bulkCreate(resortList);
  } catch (e) {
    console.log(e);
  }
  console.log('done seeding and associating!');
}

module.exports = { syncAndSeedDatabase };
