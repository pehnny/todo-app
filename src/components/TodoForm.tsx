import {useRef} from "react";
import {KeyboardEvent} from "react";
import {NewTask} from "../types/types.tsx";

export function TodoForm({handleNewTask}: { handleNewTask: NewTask }) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleButton() {
        if (!inputRef.current?.value) {
            return;
        }

        handleNewTask(inputRef.current.value);
        inputRef.current.value = "";
    }

    function handleInput(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }

        handleButton();
    }

    return (
        <section className="task">
            <input type="text"
                   name="newTask"
                   placeholder="Entrez une nouvelle tâche"
                   ref={inputRef}
                   onKeyUp={(event) => handleInput(event)}/>
            <button type="button" onClick={handleButton}>Ajouter tâche</button>
        </section>
    );
}