import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'

// type Task = {id: number, name: string, done: boolean};
// type CheckTaskFunction = (id: number) => void;

export function Todo() {
    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoNewTask/>
            <TodoList/>
        </>
    )
}

function TodoNewTask() {
    return (
        <section className="task">
            <input type="text" placeholder="Entrez une nouvelle tâche"/>
            <button type="button">Ajouter tâche</button>
        </section>
    )
}

function TodoList() {
    const taskList = [
        {
            id: 1,
            name: "Apprendre React",
            done: false
        },
        {
            id: 2,
            name: "S'amuser",
            done: false
        },
        {
            id: 3,
            name: "Ajouter des événements",
            done: false
        }
    ];

    const [tasks, setTask] = useState(taskList);

    function handleCheck(id: number) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        setTask(newTasks);
    }

    return (
        <section className="task-list">
            <h2>Tâches</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox"
                               id={task.id.toString()}
                               name={task.name}
                               checked={task.done}
                               onChange={() => handleCheck(task.id)}/>
                        <label htmlFor={task.name}>{task.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    )
}
