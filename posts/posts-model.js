const db = require("../data/config");

function findPostsByUserId(id) {
  // select posts.id , posts.contents , users.username
  // from posts join users
  // on posts.user_id = users.id
  // where user_id = ?
  return db("posts")
    .where("user_id", id)
    .leftJoin("users", "posts.user_id", "users.id")
    .select("posts.id", "posts.contents", "users.username");
}

function findPostByPostId(id) {
  // const post = await db("posts")
  //   .select("posts.id", "posts.contents")
  //   .where({ user_id: req.params.id })
  //   .first();

  return db("posts")
    .where({ "posts.id": id })
    .join("users")
    .select("posts.id", "posts.contents", "user_id", "users.username")
    .first();
}

module.exports = {
  findPostsByUserId,
  findPostByPostId
};
