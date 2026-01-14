import { ArrowLeft } from "lucide-react";
import Comments from "../components/comments";
import Posts from "../components/posts";
 
const CommentPage = () =>{
    return(
        <main className="bg-secondary min-h-screen font-primary ">
            <header className="flex justify-between px-3.5 items-center h-15.5">
              <ArrowLeft className="text-white w-7 h-7"/>
            </header>
         <section>
             <Posts 
            title="My first Post"
            content="This is the content of the Post"
            date={new Date()}
            commentCount={3}
            />
         </section>
         <section className="mt-5 mb-5 px-3.5">
           <textarea 
                className="
                 w-full resize-none whitespace-pre-wrap focus:outline-none text-lg
                 wrap-break-words text-white placeholder:text-gray-400 " 
                placeholder="What's on your mind...."
                onInput={(e:React.FormEvent<HTMLTextAreaElement>)=>{
                const target = e.currentTarget
                target.style.height = "auto"
                target.style.height = `${target.scrollHeight}px`
                }}/>
            <button className="border-primary rounded-2xl px-2 py-1 w-17 text-white bg-primary">
                Send
              </button>
         </section>
         <section>
            <Comments 
            content="This is a comment"
            date={new Date()}
            />
            <Comments 
            content="This is another comment"
            date={new Date()}
            />
         </section>

        </main>
    )
}

export default CommentPage;