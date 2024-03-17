const express = require("express")
const router = express.Router();
const { createPostController, deletePostController, getAllPostsController, getAllPostByIdController, likePostController } = require("../controllers/post.controller")

router.post('/createpost',createPostController);
router.delete('/deletepost/:postId',deletePostController);
router.get('/allposts',getAllPostsController)
router.get('/posts/:userId',getAllPostByIdController)
router.post("/like/:postId",likePostController)


module.exports = router