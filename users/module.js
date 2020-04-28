const db = require("../data/config");
module.exports = {
  all,
  findById
};

function all() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
