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
import {TodoCounter} from "./components/TodoCounter.tsx";

export function Todo() {
    const [tasks, setTasks] = useState<Task[]>(loadLocalStorageOngoingTasks);

    const maxID = Math.max(...tasks.map(task => task.id), 0) + 1;
    const [ID, setID] = useState(() => loadLocalStorageID(maxID));

    useEffect(() => saveLocalStorageData(tasks, ID), [tasks, ID]);

    function handleNewTask(name: string) {
        if (!name.trim()) {
            return;
        }
        setID(ID + 1);
        setTasks([...tasks, {id: ID + 1, name, done: false}]);
    }

    function handleUpdateTask(taskID: number) {
        setTasks(tasks.map(task => task.id === taskID ? {...task, done: !task.done} : task));
    }

    function handleDeleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleDeleteDoneTasks() {
        setTasks(tasks.filter(task => !(task.done)));
    }

    console.log(...tasks);
    return (
        <>
            <h1 className="title">Todo App</h1>
            <TodoForm handleNewTask={handleNewTask}/>
            <TodoList taskList={tasks}
                      handleUpdateTask={handleUpdateTask}
                      handleDeleteTask={handleDeleteTask}
                      handleDeleteDoneTasks={handleDeleteDoneTasks}/>
            <TodoCounter taskCount={tasks.length}/>
        </>
    );
}
