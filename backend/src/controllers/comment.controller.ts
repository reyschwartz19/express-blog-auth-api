import { Request, Response } from "express";
import * as commentServices from '../services/comment.service'

interface PostParams {
    postId: string;
    commentId: string;
}

export const getCommentByPostId  = async (req: Request<PostParams>, res: Response) =>{
    try{
        const comments = await commentServices.getCommentsForPost(req.params.postId);
        res.status(200).json({success: true, data: comments})
    }catch(error: unknown) {
        if (error instanceof Error){
            res.status(404).json({success:false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const getCommentByCommentId = async (req: Request<PostParams>, res: Response) =>{
    try{
        const comment  =await commentServices.getCommentById(req.params.postId, req.params.commentId);
        res.status(200).json({success: true, data: comment})
    }catch(error: unknown){
         if (error instanceof Error){
            res.status(404).json({success:false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const addCommentToPost = async (req: Request<PostParams>, res: Response) => {
     try{
        const comment  =await commentServices.addCommentToPost(req.params.postId, req.body.content);
        res.status(201).json({success: true, data: comment})
    }catch(error: unknown){
         if (error instanceof Error){
            res.status(404).json({success:false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}

export const deleteComment = async (req: Request<PostParams>, res: Response) => {
      try{
        const comment  =await commentServices.removeCommentFromPost(req.params.postId, req.params.commentId);
        res.status(200).json({success: true, data: comment})
      }catch(error: unknown){
         if (error instanceof Error){
            res.status(404).json({success:false, message: error.message})
        }else{
            res.status(500).json({
                success: false,
                message: "Unexpected Error"
            });
        }
    }
}