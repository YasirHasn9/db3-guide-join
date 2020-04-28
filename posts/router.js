const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(
      await db.select("posts.contents as quote", "users.username as author")
        .from("posts")
        .join("users", "posts.user_id", "=", "users.id")
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
