import {useRef} from "react";
import {NewTask} from "../types/types.tsx";

export function TodoForm({handleNewTask}: { handleNewTask: NewTask }) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleButton() {
        if (!inputRef.current?.value) {
            return;
        }

        const newTask = inputRef.current.value.trim();

        if (!newTask) {
            return;
        }

        inputRef.current.value = "";
        handleNewTask(newTask);
    }

    return (
        <section className="task">
            <input type="text"
                   name="newTask"
                   placeholder="Entrez une nouvelle tâche"
                   ref={inputRef}/>
            <button type="button" onClick={handleButton}>Ajouter tâche</button>
        </section>
    );
}