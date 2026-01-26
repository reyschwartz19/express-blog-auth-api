import { CommentModel } from "../models/comment.model";

export const createComment =  async (postId: string, content: string)=>{
    return CommentModel.create({postId, content})
};
export const findCommentsByPostId = async(postId: string)=>{
    return CommentModel.find({postId}).sort({createdAt: -1});
}
export const findCommentById = async (postId: string, commentId: string)=>{
    return CommentModel.findOne({_id: commentId, postId});
}
export const deleteComment = async (commentId: string, postId: string) =>{
    return CommentModel.findOneAndDelete({_id: commentId, postId});
}

export const countCommentsForPost = async (postId: string) =>{
    return CommentModel.countDocuments({postId});
}