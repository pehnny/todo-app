import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import TodoList from './Todo.tsx'

createRoot(document.querySelector('main')!).render(
    <StrictMode>
        <TodoList/>
    </StrictMode>,
)
