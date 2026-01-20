import express, {Request,Response} from 'express';
const app = express();
import postRouter from './routes/posts.router'
import commentRouter  from './routes/comments.router';
import connectDB from './config/db';
import dotenv from 'dotenv';
dotenv.config();

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/posts',postRouter)
app.use('/api/posts/:postId/comments',commentRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

