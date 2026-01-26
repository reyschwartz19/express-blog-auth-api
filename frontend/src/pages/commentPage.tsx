import { ArrowLeft } from "lucide-react";
import Comments from "../components/comments";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPostById } from "../api/post.api";
import type { Post } from "../types/post";
import Posts from "../components/posts";
import { createComment, getCommentByPost } from "../api/comment.api";
import type { Comment } from "../types/comment";

 
const CommentPage = () =>{

    const [post, setPost] = useState<Post | null>(null);
    const [commentContent, setCommentContent] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    const { postId } = useParams<{ postId: string }>();
    useEffect(() => {
        if(!postId) return;

        getPostById(postId).then(setPost).catch(err => console.error('Failed to fetch post:', err));
    },[postId])

    useEffect(() => {
        if(!postId) return;

        getCommentByPost(postId).then(setComments).catch(err => console.error('Failed to fetch comments:', err));
    }, [postId])

    const handleAddComment = async () => {
        if (!postId || commentContent.trim() === '') return;
      const newComment =   await createComment(postId, commentContent);
        setComments(prev => [...prev, newComment]);
        setPost(prev =>
    prev
      ? { ...prev, commentCount: prev.commentCount + 1 }
      : prev
  );
        setCommentContent('');
    }


    const returnHome = useNavigate();

    return(
        <main className="bg-secondary min-h-screen font-primary ">
            <header className="flex justify-between px-3.5 items-center h-15.5">
              <ArrowLeft 
              className="text-white w-7 h-7"
              onClick={()=>returnHome('/')}/>
            </header>
         <section>
          {post && <Posts post={post} onPostClick={() => {}}/>} 
        </section>  
         <section className="mt-5 mb-5 px-3.5">
           <textarea 
                value={commentContent}
                onChange={e => setCommentContent(e.target.value)}
                className="
                 w-full resize-none whitespace-pre-wrap focus:outline-none text-lg
                 wrap-break-words text-white placeholder:text-gray-400 " 
                placeholder="What's on your mind...."
                onInput={(e:React.FormEvent<HTMLTextAreaElement>)=>{
                const target = e.currentTarget
                target.style.height = "auto"
                target.style.height = `${target.scrollHeight}px`
                }}/>
            <button 
            disabled = {!commentContent.trim()}
            onClick={handleAddComment}
            className="border-primary rounded-2xl px-2 py-1 w-17 text-white bg-primary">
                Send
              </button>
         </section>
         <section>
            {
                comments.map(comment => (
                    <Comments key={comment.id} comment={comment}/>
                ))
            }
         </section>

        </main>
    )
}

export default CommentPage; 