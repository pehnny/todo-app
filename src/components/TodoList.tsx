import {ActionTask, ActionTasks, Task} from "../types/types.tsx";
import {TaskType} from "../taskTypes/TaskType.tsx";

export function TodoList({taskList, handleUpdateTask, handleDeleteTask, handleDeleteDoneTasks}: {
    taskList: Task[],
    handleUpdateTask: ActionTask,
    handleDeleteTask: ActionTask,
    handleDeleteDoneTasks: ActionTasks,
}) {
    return (
        <section className="task-list">
            <h2>Tâches</h2>
            {Object.values(TaskType).map((taskType: TaskType) => (
                <ul key={taskType} className={`task-list-${taskType}`}>
                    <h3>{taskType}</h3>
                    {taskList
                        .filter((task: Task) => (task.type === taskType))
                        .map((task: Task) => (
                            <li key={task.id}>
                                <input type="checkbox"
                                       id={task.id.toString()}
                                       name={task.name}
                                       checked={task.done}
                                       onChange={() => handleUpdateTask(task.id)}/>
                                <label htmlFor={task.name}>{task.name}</label>
                                <button type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            ))}
            <button onClick={handleDeleteDoneTasks}>Retirer les tâches complétées</button>
        </section>
    );
}