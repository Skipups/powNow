const { Router } = require('express');
const { Pass, Resort } = require('../db/index.js');

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
