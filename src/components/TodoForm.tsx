import {useRef} from "react";
import {KeyboardEvent} from "react";
import {NewTask} from "../types/types.tsx";
import {TaskType} from "../taskTypes/TaskType.tsx";

export function TodoForm({handleNewTask}: { handleNewTask: NewTask }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    function handleButton() {
        if (!inputRef.current?.value || !selectRef.current?.value) {
            return;
        }

        handleNewTask(inputRef.current.value, selectRef.current.value as TaskType);
        inputRef.current.value = "";
    }

    function handleInput(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }

        handleButton();
    }

    return (
        <section className="task-form">
            <select className="task-form-select"
                    name="type"
                    ref={selectRef}>
                {Object.values(TaskType).map((taskType: TaskType) => (
                    <option key={taskType}>{taskType}</option>
                ))}
            </select>
            <input className="task-form-input"
                   type="text"
                   name="newTask"
                   placeholder="Entrez une nouvelle tâche"
                   ref={inputRef}
                   onKeyUp={(event) => handleInput(event)}/>
            <button className="task-form-button"
                    type="button"
                    onClick={handleButton}>
                Ajouter une tâche
            </button>
        </section>
    );
}