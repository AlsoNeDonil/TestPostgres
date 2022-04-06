const Router = require("express");
const router = new Router();
const postsController = require("../controller/posts.controller");

router.post("/posts", postsController.createPost);
router.get("/posts", postsController.getUserPosts);

module.exports = router