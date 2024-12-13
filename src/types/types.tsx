export type Task = { id: number, name: string, done: boolean };
export type NewTask = (name: string) => void;
export type ActionTask = (id: number) => void;
export type ActionTasks = () => void;
