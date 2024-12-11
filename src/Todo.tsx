import {useRef, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'

type Task = { id: number, name: string, done: boolean };
type NewTask = (name: string) => void;

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
            done: false
        }
    ]
    const [tasks, setTasks] = useState<Task[]>(initTasks);

    function handleNewTask(name: string) {
        const newTask: Task = {id: tasks.length + 1, name, done: false};
        setTasks([...tasks, newTask]);
    }

    // TODO use same logic to update status from up here

    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoForm handleNewTask={handleNewTask}/>
            <TodoList taskList={tasks}/>
        </>
    );
}

function TodoForm({handleNewTask}: { handleNewTask: NewTask }) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        if (!inputRef.current?.value) {
            return;
        }

        const newTask = inputRef.current.value.trim();

        if (!newTask) {
            return;
        }

        handleNewTask(newTask);
        inputRef.current.value = "";
    }

    return (
        <section className="task">
            <input type="text"
                   name="newTask"
                   placeholder="Entrez une nouvelle tâche"
                   ref={inputRef}/>
            <button type="button" onClick={handleSubmit}>Ajouter tâche</button>
        </section>
    );
}

function TodoList({taskList}: { taskList: Task[] }) {
    // FIXME add event trigger on added tasks
    const [tasks, setTaskState] = useState<Task[]>(taskList);

    function handleCheck(update: Task) {
        console.log(tasks);
        if (tasks.length < taskList.length) {
            console.log("hello");
            setTaskState([...taskList]);
        }
        console.log(tasks);

        const updatedTasks = tasks.map(task => {
            if (task === update) {
                task.done = !task.done;
            }
            return task;
        });

        setTaskState(updatedTasks);
        console.log(...tasks);
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
                               onChange={() => handleCheck(task)}/>
                        <label htmlFor={task.name}>{task.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    );
}
