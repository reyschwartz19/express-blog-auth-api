import {http} from './http'
import type { Comment } from '../types/comment'

export const getCommentByPost = (postId: string) =>{
    return http<Comment[]>(`/posts/${postId}/comments`);
}

export const getCommentByCommentId = (postId: string, commentId: string) =>{
    return http<Comment>(`/posts/${postId}/comments/${commentId}`);
};

export const createComment = (
    postId:string,
    content: string
) => {
    return http<Comment>(`/posts/${postId}/comments`,{
        method: "POST",
        body: JSON.stringify({content}),
    })
}


export const deletePost = (postId: string, commentId: string) =>{
    return http<void>(`/posts/${postId}/comments/${commentId}`,{
        method: "DELETE",
    })
}