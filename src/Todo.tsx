import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'
import {TodoList} from "./components/TodoList.tsx";
import {TodoForm} from "./components/TodoForm.tsx";
import {Task} from "./types/types.tsx";

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



