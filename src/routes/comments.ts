import { Router }  from "express";
import { getCommentsByPostId,getCommentsByCommentId, addComments,deleteComment } from "../controllers/comments";

// Merge params from parent router so we can access :id in this router
export const commentRouter = Router({ mergeParams: true });

commentRouter.get('/comments',getCommentsByPostId)
commentRouter.get('/comments/:commentId',getCommentsByCommentId)
commentRouter.post('/comments',addComments)
commentRouter.delete('/comments/:commentId',deleteComment)