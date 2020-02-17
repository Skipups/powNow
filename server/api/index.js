const { Router } = require('express');
const { Pass, Resort, AirportCode } = require('../db/index.js');

const apiRouter = Router();
//not complete
apiRouter.get('/passes', (req, res, next) => {
  Pass.findAll()
    .then(foundPasses => {
      console.log('FOUND PASSES ', foundPasses);
      res.status(200).send(foundPasses);
    })
    .catch(e => next());
});
//question: why is this not a template literal?
apiRouter.get('/passes/:id', (req, res, next) => {
  Resort.findAll({
    where: {
      passId: req.params.id,
    },
  })
    .then(foundResorts => res.send(foundResorts))
    .catch(e => {
      console.log(e);
      next(e);
    });
});

apiRouter.get('/airportcodes', (req, res, next) => {
  AirportCode.findAll()
    .then(allCodes => {
      console.log('FOUND CODES ', allCodes);
      res.status(200).send(allCodes);
    })
    .catch(e => next());
});
module.exports = apiRouter;
