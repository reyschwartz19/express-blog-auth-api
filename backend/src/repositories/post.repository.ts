import { PostModel } from "../models/post.model";

export const createPost =  async (title: string, content: string) =>{
    return PostModel.create({title, content})
};

export const findAllPosts = async () =>{
    return PostModel.find().sort({createdAt: -1});
};
export const findPostById = async (postId: string)=>{
    return PostModel.findById(postId);
};
export const updatePost =  async (postId: string, title: string, content: string) =>{
    return PostModel.findByIdAndUpdate(postId, {title, content}, {new: true});
};
export const deletePost = async (postId: string)=>{
    return PostModel.findByIdAndDelete(postId);
}
