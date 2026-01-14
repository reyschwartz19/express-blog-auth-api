import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/homePage.tsx'
import CreatePost from './pages/createPost.tsx'
import CommentPage from './pages/commentPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CommentPage />
  </StrictMode>,
)
