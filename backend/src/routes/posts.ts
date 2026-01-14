import { Router } from "express";
import { getPostById,getAllPosts,deletePost,createPost,editPost } from "../controllers/posts";

export const postRouter = Router();

postRouter.get('/',getAllPosts)
postRouter.get('/:id',getPostById)
postRouter.delete('/:id',deletePost)
postRouter.post('/',createPost)
postRouter.put('/:id',editPost)

