import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'

function Todo() {
    return (
        <>
            <TodoTitle/>
            <TodoTask/>
            <TodoList/>
        </>
    )
}

function TodoTitle() {
    return (
        <>
            <h1 className="title">Todo App</h1>
        </>
    );
}

function TodoTask() {
    return (
        <>
            <section className="task">
                <TodoTaskInput/>
                <TodoTaskButton/>
            </section>
        </>
    )
}

function TodoTaskInput() {
    return (
        <>
            <input type="text" placeholder="Entrez une nouvelle tâche"/>
        </>
    )
}

function TodoTaskButton() {
    return (
        <>
            <button type="button">Ajouter tâche</button>
        </>
    )
}

function TodoList() {
    const taskList = ["Apprendre React", "S'amuser", "Ajouter des événements"];
    const [tasks, setTask] = useState(taskList);

    return (
        <>
            <section className="task-list">
                <TodoListTitle/>
                <ul>
                    {tasks.map((task, id) => (
                        <TodoListCheckbox task={task} id={id}/>
                    ))}
                </ul>
            </section>
        </>
    )
}

function TodoListTitle() {
    return (
        <>
            <h2>Tâches</h2>
        </>
    )
}

function TodoListCheckbox({task, id}: { task: string, id: number },) {
    return (
        <>
            <li key={id}>
                <input type="checkbox" name={task}/>
                <label htmlFor={task}>{task}</label>
            </li>
        </>
    )
}

export default Todo
