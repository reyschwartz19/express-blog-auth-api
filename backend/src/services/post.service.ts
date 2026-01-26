import { Post } from "../types/post";
import * as postRepository from "../repositories/post.repository";
import * as commentRepository from "../repositories/comment.repository"


// const mapToPostType = (doc: any): Post => {
//   return {
//     id: doc._id.toString(),
//     title: doc.title,
//     content: doc.content,
//     createdAt: doc.createdAt
//   };
// };


export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await postRepository.findAllPosts();

  const postsWithCounts = await Promise.all(
    posts.map(async p => {
      const commentCount =
        await commentRepository.countCommentsForPost(
          p._id.toString()
        );

      return {
        id: p._id.toString(),
        title: p.title,
        content: p.content,
        createdAt: p.createdAt,
        commentCount
      };
    })
  );

  return postsWithCounts;
};


export const getPostById = async (postId: string): Promise<Post | null> =>{
    const post = await postRepository.findPostById(postId);
    if (!post){
        return null;
    }

    const commentCount = await commentRepository.countCommentsForPost(postId);
    return {
        id:  post._id.toString(),
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        commentCount
    };
};
export const createPost =  async(title: string, content: string): Promise<Post>=>{
    const post = await postRepository.createPost(title, content);
  
    return {
        id: post._id.toString(),
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
    };
};
export const deletePost = async (postId: string): Promise<void> =>{
    const deleted = await postRepository.deletePost(postId);
    if(!deleted){
        throw new Error("Post not found");
    };
};
export const updatePost = async ( postId: string, title: string, content: string): Promise<Post | null> =>{
    const post = await postRepository.updatePost( postId, title, content);
    
    if(!post){
        return null;
    }
    return {
         id: post._id.toString(),
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
       
    }
}