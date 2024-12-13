import {ActionTask, ActionTasks, Task} from "../types/types.tsx";

export function TodoList({taskList, handleUpdateTask, handleDeleteTask, handleDeleteDoneTasks}: {
    taskList: Task[],
    handleUpdateTask: ActionTask,
    handleDeleteTask: ActionTask,
    handleDeleteDoneTasks: ActionTasks,
}) {
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
                               onChange={() => handleUpdateTask(task.id)}/>
                        <label htmlFor={task.name}>{task.name}</label>
                        <button type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleDeleteDoneTasks}>Nettoyer les tâches complétées</button>
        </section>
    );
}