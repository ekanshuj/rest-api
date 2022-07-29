const { v4: uuidv4 } = require('uuid');

let users = [];

const getUsers = (req, res) => {
  res.send(users);
};

const createUsers = (req, res) => {
  const user = req.body;
  const userWithID = { ...user, id: uuidv4() };
  users.push(userWithID);
  res.send(`User has been added with id: ${userWithID.id}`);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const USER = users.find(user => user.id === id);
  res.send(USER);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.send(`User with id:${id} has been deleted`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, lang, age } = req.body;
  const USER = users.find(user => user.id === id);
  if (name) USER.name = name;
  if (lang) USER.lang = lang;
  if (age) USER.age = age;
  res.send(`User with id:${id} has been updated`);
};

module.exports = { getUsers, createUsers, getUser, deleteUser, updateUser };