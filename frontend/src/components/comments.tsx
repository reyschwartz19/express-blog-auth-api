type CommentProps = {
   
    content: string;
    date: Date;
   
}

const Comments = ({content,date}:CommentProps) => {
      return(
        <div className="bg-secondary w-full p-5  border border-t-gray-500 border-b-gray-500">
           
            <p className="text-white mb-4">{content}</p>
            <div className="text-sm text-white mb-1">Posted on: {date.toDateString()}</div>
           
        </div>
      );
}

export default Comments;