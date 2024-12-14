import {TaskType} from "../taskTypes/TaskType.tsx";

export type Task = { id: number, name: string, done: boolean, type: TaskType };
export type NewTask = (name: string, type: TaskType) => void;
export type ActionTask = (id: number) => void;
export type ActionTasks = () => void;
