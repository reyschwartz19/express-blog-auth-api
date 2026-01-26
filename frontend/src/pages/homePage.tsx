import { Plus } from "lucide-react"
import Posts from "../components/posts"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getPosts } from "../api/post.api"
import type { Post } from "../types/post"

const HomePage = () =>{

   const [posts, setPosts] =  useState<Post[]>([]);

   useEffect(() =>{
    getPosts().then(setPosts).catch(err => console.error('Failed to fetch posts:', err));
   },[])

  const navigate = useNavigate();
  const goToComments = (postId: string) =>{
    navigate(`/posts/${postId}`);
  }
  

    return(
        <main className="min-h-screen bg-secondary overflow-x-hidden font-primary">
          <header 
          className="
            bg-secondary h-15.5 w-full
            flex items-center px-3.5 border 
            border-b-gray-400
            fixed top-0 left-0">
            <p className="text-primary ml-37.5 text-2xl">BLOG</p>
            <Plus 
            className="ml-auto border rounded-full text-primary w-8 h-8 p-1 cursor-pointer"
            onClick={() => navigate('/create-post')}  />
          </header>
          <section className="mt-15.5">
            <div 
            className="cursor-pointer">
              {posts.map(post =>(
                <Posts key={post.id} post={post} onPostClick={goToComments}/>
              ))}
            </div>
          </section>
        </main>
    )
}

export default HomePage