const { Router } = require('express');
const { models } = require('../db/index.js');

const { Pass, Resort } = models;

const apiRouter = Router();
//not complete
apiRouter.get('/ikonResorts', (req, res, next) => {
  Resort.findAll()
    .then(foundIkonresorts => {
      res.send(foundIkonResorts);
    })
    .catch(next);
});

module.exports = apiRouter;
