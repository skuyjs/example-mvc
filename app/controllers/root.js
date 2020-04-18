const db = require('../models/database');

const redirect = (res, url) => {
  res.writeHead(302, {
    'Location': url,
  });
  res.end();
};

const index = async (req, res) => {
  const todos = await db.table('todos').all();
  res.render('index.ejs', { todos: todos.rows });
};

const add = (req, res) => {
  res.render('add.ejs');
};

const save = async (req, res) => {
  const todo = req.body
    .split('&')
    .map(t => unescape(t.replace('+', ' ')))
    .map(t => t.split('='))
    .reduce((acc, curr) => (acc[curr[0]] = curr[1], acc), {});

  const insert = await db.table('todos').insert(todo);

  // will update later
  // res.redirect('/');
  redirect(res, '/');
};

module.exports = {
  index,
  add,
  save,
};

