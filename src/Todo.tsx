import {useRef, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'

type Task = { id: number, name: string, done: boolean };
type NewTask = (name: string) => void;
type UpdateTask = (id: number) => void;

export function Todo() {
    const initTasks = [
        {
            id: 1,
            name: "Learn React",
            done: false
        },
        {
            id: 2,
            name: "Make this button to work",
            done: true
        },
        {
            id: 3,
            name: "Make these checkboxes to work",
            done: true
        }
    ]
    const [tasks, setTasks] = useState<Task[]>(initTasks);

    function handleNewTask(name: string) {
        const newTask: Task = {id: tasks.length + 1, name, done: false};

        setTasks([...tasks, newTask]);
    }

    function handleUpdatedTask(id: number) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });

        setTasks(updatedTasks);
    }

    console.log(...tasks);
    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoForm handleNewTask={handleNewTask}/>
            <TodoList taskList={tasks} handleUpdatedTask={handleUpdatedTask}/>
        </>
    );
}

function TodoForm({handleNewTask}: { handleNewTask: NewTask }) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleButton() {
        if (!inputRef.current?.value) {
            return;
        }

        const newTask = inputRef.current.value.trim();

        if (!newTask) {
            return;
        }

        inputRef.current.value = "";
        handleNewTask(newTask);
    }

    return (
        <section className="task">
            <input type="text"
                   name="newTask"
                   placeholder="Entrez une nouvelle tâche"
                   ref={inputRef}/>
            <button type="button" onClick={handleButton}>Ajouter tâche</button>
        </section>
    );
}

function TodoList({taskList, handleUpdatedTask}: { taskList: Task[], handleUpdatedTask: UpdateTask }) {
    function handleInput(id: number) {
        handleUpdatedTask(id);
    }

    return (
        <section className="task-list">
            <h2>Tâches</h2>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox"
                               id={task.id.toString()}
                               name={task.name}
                               checked={task.done}
                               onChange={() => handleInput(task.id)}/>
                        <label htmlFor={task.name}>{task.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    );
}
