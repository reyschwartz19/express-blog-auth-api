import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/post.api";
import { useState } from "react";
 
const CreatePost = () =>{

  const returnHome = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = async () =>{
    if(!title.trim() || !content.trim()) return;

    await createPost({title, content});
    returnHome('/');
  }


    return(
        <main className="bg-secondary min-h-screen font-primary ">
            <header className="flex justify-between px-3.5 items-center h-15.5">
              <ArrowLeft 
              className="text-white w-7 h-7"
               onClick={()=>returnHome('/')}
              />
              <button 
              className="border-primary rounded-2xl px-2 py-1 w-17 text-white bg-primary"
              onClick={handleAddPost}
              >
                Post
              </button>
            </header>
            <section className="w-full px-3.5 mt-5">
                <input  
                placeholder="Title " 
                className="text-white placeholder:text-gray-400 outline mb-5 w-full h-10 px-3"
                value={title}
                onChange={e => setTitle(e.target.value)}/>
                <textarea 
                value={content}
                onChange={e => setContent(e.target.value)}
                className="
                 w-full resize-none whitespace-pre-wrap focus:outline-none text-lg
                 wrap-break-words text-white placeholder:text-gray-400 " 
                placeholder="What's on your mind...."
                onInput={(e:React.FormEvent<HTMLTextAreaElement>)=>{
                const target = e.currentTarget
                target.style.height = "auto"
                target.style.height = `${target.scrollHeight}px`
                }}/>
            </section>

        </main>
    )
}

export default CreatePost;