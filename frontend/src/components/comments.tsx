import type { Comment } from "../types/comment";

interface CommentProps {
    comment: Comment;
}

const Comments = ({comment}:CommentProps) => {
      return(
        <div className="bg-secondary w-full p-5  border border-t-gray-500 border-b-gray-500">
           
            <p className="text-white mb-4">{comment.content}</p>
            <div className="text-sm text-white mb-1">Posted on: {new Date(comment.createdAt).toDateString()}</div>
           
        </div>
      );
}

export default Comments;