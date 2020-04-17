const Database = require('@skuyjs/query-builder');

module.exports = new Database({
  dialect: 'mysql2',
  username: 'root',
  password: 'root',
  database: 'test',
});
