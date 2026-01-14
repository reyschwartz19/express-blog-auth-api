import { Request,Response } from "express";
import { comments, posts } from "../data";

const getCommentsByPostId = (req:Request, res:Response)=>{
    const postId= Number(req.params.id)
    const post = posts.find(p=>p.id===postId)
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            message: "Post not found"
        })
    }
    const postComments = comments.filter(
        (comment)=>comment.postId === postId
    );
    res.status(200).json({
        success:true,
        data: postComments
    })
}

const getCommentsByCommentId = (req: Request, res: Response)=>{
     const postId= Number(req.params.id)
    const post = posts.find(p=>p.id===postId)
    const commentId = Number(req.params.commentId)
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            message: "Post not found"
        })
    }
    const postComments = comments.filter(
        (comment)=>comment.postId === postId
    );
    const comment = postComments.filter(
        (c)=>c.id === commentId
    )
    res.status(200).json({
        success:true,
        data: comment
    })
}
const addComments = (req: Request, res: Response) =>{
    const postId= Number(req.params.id)
    const post = posts.find(p=>p.id===postId)
    const {content} = req.body
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            message: "Post not found"
        })
    }
  
     const newId = comments.length>0
                ? comments[comments.length-1].id + 1
                : 1;
    const newComment  = {
        id: newId,
        postId,
        content,
        createdAt: new Date()
    }
    comments.push(newComment)
      res
    .status(201)
    .json({
        success: true,
        data: newComment
    })
}
const deleteComment =( req: Request, res: Response) =>{
    const postId= Number(req.params.id)
    const post = posts.find(p=>p.id===postId)
     const commentId = Number(req.params.commentId)
    if(!post){
        return res
        .status(404)
        .json({
            success:false,
            message: "Post not found"
        })
    }
    const newComments = comments.filter((c)=>c.id!==commentId)
    res.status(200).json({
        success: true,
        data: newComments
    })
}
export {getCommentsByPostId,getCommentsByCommentId,addComments,deleteComment}