import {Request,Response} from 'express';
import {posts} from '../data';

const getAllPosts = (req: Request,res: Response)=>{
    res.status(200).json({success:true,data:posts})
}

const getPostById = (req: Request,res: Response)=>{
    const id = Number(req.params.id)
    const post = posts.find(p => p.id === id);
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            mesaage:'Cant find post'})
    }
    res.status(200).json({success:true,data:post})
}

const deletePost = (req:Request,res:Response)=>{
    const id = Number(req.params.id)
    const post = posts.find(p => p.id === id);
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            mesaage:'Cant find post'})
    }
    const newPosts = posts.filter((p)=>p.id !== id);
    return res.status(200).json({success:true,data:newPosts})
}

const createPost = (req:Request, res:Response)=>{
    const {title,content} = req.body;
    if(!title || !content){
        return res
        .status(400)
        .json({
            success:false,
            message:'Must provide title and content'
        })
    }
    const newId = posts.length>0
                ? posts[posts.length-1].id + 1
                : 1;
    const newPost = {
        id: newId,
        title,
        content,
        createdAt: new Date()
    }
    posts.push(newPost);
    res
    .status(201)
    .json({
        success: true,
        data: newPost
    })
}

const editPost = (req:Request,res:Response)=>{
    const id = Number(req.params.id)
    const post = posts.find(p => p.id === id);
    const {title,content} = req.body;
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            mesaage:'Cant find post'})
    }
    if(!title || !content){
         return res
        .status(400)
        .json({
            success:false,
            message:'Must provide title and content'
        })
    }
    if(title){
    post.title = title;
    }
    if(content){
    post.content = content;
    }
    res.status(200).json({
        success: true,
        data: post
    })
}

export {getAllPosts,getPostById,deletePost,createPost,editPost}