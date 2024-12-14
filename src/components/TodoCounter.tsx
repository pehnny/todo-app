export function TodoCounter({taskCount}: { taskCount: number }) {
    return (
        <section className="task-counter">
            <h2>Tâches en cours</h2>
            <p>{taskCount}</p>
        </section>
    );
}