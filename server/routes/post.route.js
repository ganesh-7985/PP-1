const express = require("express")
const router = express.Router();
const { createPostController, updatePostController, deletePostController, getAllPostsController, getPostByIdController, likePostController, dislikePostController } = require("../controllers/post.controller")

router.post('/api/createpost',createPostController);
router.put('/api/updatepost/:postId',updatePostController);
router.delete('/api/deletepost/:postId',deletePostController);
router.get('/api/allposts',getAllPostsController)
router.get('/api/posts/:userId',getPostByIdController)
router.post("/like/:postId",likePostController)
router.post("/dislike/:postId",dislikePostController)
module.exports = router