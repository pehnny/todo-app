import {useRef, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'

type Task = {id: number, name: string, done: boolean};
// type CheckTaskFunction = (id: number) => void;

export function Todo() {
    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoForm/>
            <TodoList/>
        </>
    );
}

function TodoForm() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        const inputTask = inputRef.current;
        if (!inputRef.current) {
            console.log("Input Element Not Found");
            return;
        }
        console.log(inputTask);
    }

    return (
        <form className="task" onSubmit={handleSubmit}>
            <input type="text"
                name="newTask"
                placeholder="Entrez une nouvelle tâche"
                ref={inputRef}/>
            <button type="submit">Ajouter tâche</button>
        </form>
    );
}

function TodoList() {
    const initialTasks = [
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

    const [tasks, setTask] = useState<Task[]>(initialTasks);

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
    );
}
