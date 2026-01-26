import {http} from './http'
import type { Post } from '../types/post'

export const getPosts = () =>{
    return http<Post[]>('/posts');
}

export const getPostById = (postId: string) =>{
    return http<Post>(`/posts/${postId}`);
};

export const createPost = (data: {
    title:string;
    content: string;
}) => {
    return http<Post>("/posts",{
        method: "POST",
        body: JSON.stringify(data),
    })
}

export const updatePost = (data: {
    title:string;
    content: string;
}) => {
    return http<Post>("/posts",{
        method: "PUT",
        body: JSON.stringify(data),
    })
}

export const deletePost = (postId: string) =>{
    return http<void>(`/posts/${postId}`,{
        method: "DELETE",
    })
}