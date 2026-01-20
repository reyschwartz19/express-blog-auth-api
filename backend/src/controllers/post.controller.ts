import { Request, Response } from "express";
import * as postServices from '../services/post.service'

interface PostParams {
    postId: string;
}

export const getAllPosts =  async (req: Request, res: Response) =>{
    try{
        const posts = await postServices.getAllPosts();
        res.status(200).json({success: true, data: posts})
    }catch(error: unknown){
        if (error instanceof Error){
            res.status(404).json({success: false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const getPostById = async (req: Request<PostParams>, res: Response) => {
    try{
        const post = await postServices.getPostById(req.params.postId);
        res.status(200).json({success: true, data: post});
    }catch(error: unknown){
        if (error instanceof Error){
            res.status(404).json({success: false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const createPost = async (req: Request<PostParams>, res: Response) => {
    try{
        const {title, content} = req.body
        const post = await postServices.createPost(title, content)
        res.status(201).json({success: true, data: post});
    }catch(error: unknown){
        if (error instanceof Error){
            res.status(400).json({success: false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const deletePost = async (req: Request<PostParams>, res: Response) => {
    try{
        await postServices.deletePost(req.params.postId);
        res.status(200).json({success: true});
    }catch(error: unknown){
        if (error instanceof Error){
            res.status(404).json({success: false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const updatePost = async (req: Request<PostParams>, res: Response) => {
    try{
        const {title, content} = req.body
        const post = await postServices.updatePost(req.params.postId, title, content);
        res.status(200).json({success: true, data: post});
    }catch(error: unknown){
        if (error instanceof Error){
            res.status(404).json({success: false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}