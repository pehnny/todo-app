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
            <h2 className="task-list-title">Tâches</h2>
            <section className="task-list-type">
                {Object.values(TaskType).map((taskType: TaskType) => (
                    <article className={`task-list-type-${taskType}-container`}
                             key={taskType}>
                        <h2 className={`task-list-type-${taskType}-title`}>{taskType}</h2>
                        <ul className={`task-list-type-${taskType}`}>
                            {taskList
                                .filter((task: Task) => (task.type === taskType))
                                .map((task: Task) => (
                                    <li key={task.id}
                                        className={`task-list-type-${taskType}-li`}
                                        id={`task-${task.id}`}>
                                        <label className={`task-list-type-${taskType}-li-label`}
                                               htmlFor={`${task.id}-${task.name}`}>{task.name}</label>
                                        <input className={`task-list-type-${taskType}-li-input`}
                                               type="checkbox"
                                               id={`task-input-${task.id}`}
                                               name={`${task.id}-${task.name}`}
                                               checked={task.done}
                                               onChange={() => handleUpdateTask(task.id)}/>
                                        <button className={`task-list-type-${taskType}-li-button`}
                                                type="button"
                                                onClick={() => handleDeleteTask(task.id)}>x
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </article>
                ))}
            </section>
            <button onClick={handleDeleteDoneTasks}>Retirer les tâches complétées</button>
        </section>
    );
}