import type { Post } from "../types/post";

interface Props {
    post: Post;
}

const Posts = ({post}:Props) => {

      return(
        <div className="bg-secondary w-full p-5  border border-t-gray-500 border-b-gray-500">
            <h2 className="text-2xl font-bold mb-2 text-primary">{post.title}</h2>
            <p className="text-white mb-4">{post.content}</p>
            <div className="text-sm text-white mb-1">Posted on: {new Date(post.createdAt).toDateString()}</div>
            <div className="text-sm text-primary cursor-pointer">Comments: {}</div>
        </div>
      );
}

export default Posts;