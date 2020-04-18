const rootController = require('./controllers/root');
const { Router } = require('@skuyjs/http-server');

const route = new Router();
route.get('', rootController.index);
route.get('add', rootController.add);
route.post('add', rootController.save);
route.get(':id', rootController.show);

const routes = (app) => {
  app.use('/', route);
};

module.exports = routes;