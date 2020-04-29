const express = require("express");
const db = require("../data/config");

const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {

    // select posts.id , posts.contents , users.username 
    // from posts join users 
    // on posts.user_id = users.id
    // where user_id = ? 
    const posts = await db("posts")
      .where("user_id", req.params.id)
      .leftJoin("users" , "posts.user_id" , "users.id")
      .select("posts.id" , "posts.contents" , "users.username")
    res.json(posts);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const post = await db("posts")
      .select("*")
      .where({ user_id: req.params.id })
      .first();
    res.json(post);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
