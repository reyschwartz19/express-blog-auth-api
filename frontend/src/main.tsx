import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import HomePage from './pages/homePage.tsx'
import CreatePost from './pages/createPost.tsx'
import CommentPage from './pages/commentPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/create-post',
    element: <CreatePost />
  },
  {
    path: '/comments/:postId',
    element: <CommentPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

