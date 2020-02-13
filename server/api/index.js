const { Router } = require('express');
const { Pass, Resort } = require('../db/index.js');

const apiRouter = Router();
//not complete
apiRouter.get('/passes', (req, res, next) => {
  Pass.findAll()
    .then(foundPasses => {
      res.send(foundPasses);
    })
    .catch(next);
});
//question: why is this not a template literal?
apiRouter.get(`/resorts/:passId`, (req, res, next) => {
  console.log('req.params.id in resorts router', req.params.id);
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
module.exports = apiRouter;
