type PostsProps = {
    title: string;
    content: string;
    date: Date;
    commentCount: number;
}

const Posts = ({title,content,date,commentCount}:PostsProps) => {
      return(
        <div className="bg-secondary w-full p-5  border border-t-gray-500 border-b-gray-500">
            <h2 className="text-2xl font-bold mb-2 text-primary">{title}</h2>
            <p className="text-white mb-4">{content}</p>
            <div className="text-sm text-white mb-1">Posted on: {date.toDateString()}</div>
            <div className="text-sm text-primary cursor-pointer">Comments: {commentCount}</div>
        </div>
      );
}

export default Posts;