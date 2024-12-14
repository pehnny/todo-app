import {useEffect, useState} from 'react'
import reactLogo from "./assets/react.svg";
import './Todo.css'
import {TodoList} from "./components/TodoList.tsx";
import {TodoForm} from "./components/TodoForm.tsx";
import {Task} from "./types/types.tsx";
import {loadLocalStorageTasks} from "./localStorage/loadLocalStorageTasks.tsx";
import {saveLocalStorageData} from "./localStorage/saveLocalStorageData.tsx";
import {loadLocalStorageID} from "./localStorage/loadLocalStorageID.tsx";
import {TodoCounter} from "./components/TodoCounter.tsx";
import {TaskType} from "./taskTypes/TaskType.tsx";

export function Todo() {
    const [tasks, setTasks] = useState<Task[]>(loadLocalStorageTasks);
    const maxID = Math.max(...tasks.map(task => task.id), 0);
    const [ID, setID] = useState(() => loadLocalStorageID(maxID));

    useEffect(() => saveLocalStorageData(tasks, ID), [tasks, ID]);

    function handleNewTask(name: string, type: TaskType) {
        if (!name.trim()) {
            return;
        }
        setID(ID + 1);
        setTasks([...tasks, {id: ID + 1, name, done: false, type}]);
    }

    function handleUpdateTask(taskID: number) {
        setTasks(tasks.map(task => task.id === taskID ? {...task, done: !task.done} : task));
    }

    function handleDeleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleDeleteDoneTasks() {
        setTasks(tasks.filter(task => (!task.done)));
    }

    return (
        <>
            <section className="title">
                <img src={reactLogo} className="logo react" alt="React logo"/>
                <h1>Todo App</h1>
            </section>
            <TodoForm handleNewTask={handleNewTask}/>
            <TodoList taskList={tasks}
                      handleUpdateTask={handleUpdateTask}
                      handleDeleteTask={handleDeleteTask}
                      handleDeleteDoneTasks={handleDeleteDoneTasks}/>
            <TodoCounter taskCount={tasks.filter((task: Task) => (!task.done)).length}/>
        </>
    );
}
