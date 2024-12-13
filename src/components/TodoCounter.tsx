export function TodoCounter({taskCount}: { taskCount: number }) {
    return (
        <section>
            <h2>Tâches en cours</h2>
            <p>{taskCount}</p>
        </section>
    );
}