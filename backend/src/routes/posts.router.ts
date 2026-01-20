import { Router } from "express";
import * as postController from '../controllers/post.controller'
// import { getPostById,getAllPosts,deletePost,createPost,editPost } from "../controllers/posts";

const postRouter = Router();

postRouter.get('/',postController.getAllPosts)
postRouter.get('/:postId',postController.getPostById)
postRouter.delete('/:postId',postController.deletePost)
postRouter.post('/',postController.createPost)
postRouter.put('/:postId',postController.updatePost)

export default postRouter