import { Schema, model, Types } from "mongoose";

const commentSchema = new Schema(
  {
    postId: { type: Types.ObjectId, ref: "Post", required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
);

export const Comment = model("Comment", commentSchema);
