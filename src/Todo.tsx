import {useEffect, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Todo.css'
import {TodoList} from "./components/TodoList.tsx";
import {TodoForm} from "./components/TodoForm.tsx";
import {Task} from "./types/types.tsx";
import {loadLocalStorageOngoingTasks} from "./localStorage/loadLocalStorageOngoingTasks.tsx";
import {saveLocalStorageData} from "./localStorage/saveLocalStorageData.tsx";
import {loadLocalStorageID} from "./localStorage/loadLocalStorageID.tsx";

export function Todo() {
    const [tasks, setTasks] = useState<Task[]>(loadLocalStorageOngoingTasks);

    const maxID = Math.max(...tasks.map(task => task.id), 0);
    const [id, setId] = useState(() => loadLocalStorageID(maxID));

    useEffect(() => saveLocalStorageData(tasks, id), [tasks, id]);

    function handleNewTask(name: string) {
        const newId = id + 1;
        const newTask: Task = {id: newId, name, done: false};

        setId(newId);
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
