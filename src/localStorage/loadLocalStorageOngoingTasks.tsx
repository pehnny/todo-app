import {Task} from "../types/types.tsx";
import {LocalStorageKeys} from "./LocalStorageKeys.tsx";

const initTasks = [
    {
        id: 1,
        name: "Learn React",
        done: false
    },
    {
        id: 2,
        name: "Make this button to work",
        done: true
    },
    {
        id: 3,
        name: "Make these checkboxes to work",
        done: true
    }
];

export function loadLocalStorageOngoingTasks(): Task[] {
    const data = localStorage.getItem(LocalStorageKeys.Ongoing)

    return data ? JSON.parse(data) : initTasks;
}
