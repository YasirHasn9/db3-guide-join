const express = require("express");
const postModel = require("./posts-model");
const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    // const posts = await postModel.findPostsByUserId(req.params.id)
    res.json(await postModel.findPostsByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await postModel.findPostByPostId(req.params.id));
  } catch (err) {
    next(err);
  }
});
module.exports = router;
