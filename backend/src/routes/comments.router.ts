import { Router }  from "express";
import * as commentController from '../controllers/comment.controller'
// import { getCommentsByPostId,getCommentsByCommentId, addComments,deleteComment } from "../controllers/comments";

// Merge params from parent router so we can access :id in this router
const commentRouter = Router({ mergeParams: true });

commentRouter.get('/',commentController.getCommentByPostId)
commentRouter.get('/:commentId',commentController.getCommentByCommentId)
commentRouter.post('/',commentController.addCommentToPost)
commentRouter.delete('/:commentId',commentController.deleteComment)

export default commentRouter