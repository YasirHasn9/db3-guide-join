const db = require("../data/config");
module.exports = {
  all,
  findById,
  update
};

function all() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function update(id, data) {
  return db("users")
    .where({ id })
    .first()
    .update(data);
}



