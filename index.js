const Server = require('@skuyjs/http-server');
const view = require('@skuyjs/http-plugin-view')({
  engine: 'ejs',
  dir: './app/views',
});

const routes = require('./app/routes');

const app = new Server();
const PORT = 8080;

app.use(view.build());

routes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
