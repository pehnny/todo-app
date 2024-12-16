import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Todo} from './Todo.tsx'

createRoot(document.querySelector("#root")!).render(
    <StrictMode>
        <Todo/>
    </StrictMode>,
)
