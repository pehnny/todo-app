import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Todo} from './Todo.tsx'

createRoot(document.querySelector("body")!).render(
    <StrictMode>
        <Todo/>
    </StrictMode>,
)
