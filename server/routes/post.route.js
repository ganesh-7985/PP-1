const express = require("express")
const router = express.Router();
const { createPostController, updatePostController, deletePostController, getAllPostsController, getPostByIdController, likePostController, dislikePostController } = require("../controllers/post.controller")

router.post('/createpost',createPostController);
router.put('/updatepost/:postId',updatePostController);
router.delete('/deletepost/:postId',deletePostController);
router.get('/allposts',getAllPostsController)
router.get('/posts/:userId',getPostByIdController)
router.post("/like/:postId",likePostController)
router.post("/dislike/:postId",dislikePostController)
module.exports = router