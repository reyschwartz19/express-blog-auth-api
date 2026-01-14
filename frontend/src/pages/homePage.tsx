import { Plus } from "lucide-react"
import Posts from "../components/posts"

const HomePage = () =>{
    return(
        <main className="min-h-screen bg-secondary overflow-x-hidden font-primary">
          <header 
          className="
            bg-secondary h-15.5 w-full
            flex items-center px-3.5 border 
            border-b-gray-400
            fixed top-0 left-0">
            <p className="text-primary ml-37.5 text-2xl">BLOG</p>
            <Plus className="ml-auto border rounded-full text-primary w-8 h-8 p-1"/>
          </header>
          <section className="mt-15.5">
            <Posts 
            title="My first Post"
            content="This is the content of the Post"
            date={new Date()}
            commentCount={3}
            />
            <Posts 
            title="My first Post"
            content="This is the content of the Post"
            date={new Date()}
            commentCount={3}
            />
          </section>
        </main>
    )
}

export default HomePage