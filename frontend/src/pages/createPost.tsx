import { ArrowLeft } from "lucide-react";
 
const CreatePost = () =>{
    return(
        <main className="bg-secondary min-h-screen font-primary ">
            <header className="flex justify-between px-3.5 items-center h-15.5">
              <ArrowLeft className="text-white w-7 h-7"/>
              <button className="border-primary rounded-2xl px-2 py-1 w-17 text-white bg-primary">
                Post
              </button>
            </header>
            <section className="w-full px-3.5 mt-5">
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
            </section>

        </main>
    )
}

export default CreatePost;