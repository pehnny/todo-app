import {Task, UpdateTask} from "../types/types.tsx";

export function TodoList({taskList, handleUpdatedTask}: { taskList: Task[], handleUpdatedTask: UpdateTask }) {
    function handleInput(id: number) {
        handleUpdatedTask(id);
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
                               onChange={() => handleInput(task.id)}/>
                        <label htmlFor={task.name}>{task.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    );
}