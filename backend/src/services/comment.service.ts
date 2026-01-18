import { Comment } from "../types/comment";
import * as commentRepository from "../repositories/comment.repository";

export const getCommentsForPost = async (postId: string): Promise<Comment[]> =>{
    const comments = await commentRepository.findCommentsByPostId(postId);
    return comments.map(c=>({
        id: c._id.toString(),
        postId: c.postId.toString(),
        content: c.content,
        createdAt: c.createdAt
    }));
};
export const addCommentToPost = async (postId: string, content: string): Promise<Comment> =>{
    const comment = await commentRepository.createComment(postId, content);
    return {
        id: comment._id.toString(),
        postId: comment.postId.toString(),
        content: comment.content,
        createdAt: comment.createdAt
    };
};
export const removeCommentFromPost = async (postId: string, commentId: string): Promise<void> =>{
    const deleted = await commentRepository.deleteComment(commentId, postId);
    if(!deleted){
        throw new Error("Comment not found");
    };
};
export const getCommentById = async (postId: string, commentId: string): Promise<Comment | null> =>{
    const comment = await commentRepository.findCommentById(postId, commentId);
    if(!comment){
        return null;
    }
    return {
        id: comment._id.toString(),
        postId: comment.postId.toString(),
        content: comment.content,
        createdAt: comment.createdAt
    };
};
