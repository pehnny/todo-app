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
            <section className="task-list-type"
                     style={{gridTemplateColumns: `repeat(${Object.values(TaskType).length}, 1fr)`}}>
                {Object.values(TaskType).map((taskType: TaskType) => (
                    <ul key={taskType} className={`task-list-type-${taskType}`}>
                        <article>
                            <h3>{taskType}</h3>
                            {taskList
                                .filter((task: Task) => (task.type === taskType))
                                .map((task: Task) => (
                                    <li key={task.id}>
                                        <label htmlFor={`${task.id}-${task.name}`}>{task.name}</label>
                                        <input type="checkbox"
                                               id={task.id.toString()}
                                               name={`${task.id}-${task.name}`}
                                               checked={task.done}
                                               onChange={() => handleUpdateTask(task.id)}/>
                                        <button type="button" onClick={() => handleDeleteTask(task.id)}>x</button>
                                    </li>
                                ))
                            }
                        </article>
                    </ul>
                ))}
            </section>
            <button onClick={handleDeleteDoneTasks}>Retirer les tâches complétées</button>
        </section>
    );
}