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

    const maxID = Math.max(...tasks.map(task => task.id), 0) + 1;
    const [ID, setID] = useState(() => loadLocalStorageID(maxID));

    useEffect(() => saveLocalStorageData(tasks, ID), [tasks, ID]);

    function handleNewTask(name: string) {
        setID(ID + 1);
        setTasks([...tasks, {id: ID + 1, name, done: false}]);
    }

    function handleUpdateTask(taskID: number) {
        const updatedTasks = tasks.map(task => {
            return task.id === taskID ? {...task, done: !task.done} : task;
        });

        setTasks(updatedTasks);
    }

    console.log(...tasks);
    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoForm handleNewTask={handleNewTask}/>
            <TodoList taskList={tasks} handleUpdatedTask={handleUpdateTask}/>
        </>
    );
}
