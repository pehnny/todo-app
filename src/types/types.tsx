export type Task = { id: number, name: string, done: boolean };
export type NewTask = (name: string) => void;
export type UpdateTask = (id: number) => void;
