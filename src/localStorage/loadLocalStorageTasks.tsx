import {Task} from "../types/types.tsx";
import {LocalStorageKeys} from "./LocalStorageKeys.tsx";

export function loadLocalStorageTasks(): Task[] {
    const data = localStorage.getItem(LocalStorageKeys.Tasks)

    return data ? JSON.parse(data) : [];
}
