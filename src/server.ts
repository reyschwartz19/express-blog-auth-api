import express, {Request,Response} from 'express';
const app = express();
import {postRouter} from './routes/posts'
import { commentRouter } from './routes/comments';

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/posts',postRouter)
app.use('/api/posts/:id',commentRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

