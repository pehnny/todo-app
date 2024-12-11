import {LocalStorageKeys} from "./LocalStorageKeys.tsx";
import {Task} from "../types/types.tsx";

export function saveLocalStorageData(tasks: Task[], id: number) {
    localStorage.setItem(LocalStorageKeys.Ongoing, JSON.stringify(tasks));
    localStorage.setItem(LocalStorageKeys.ID, JSON.stringify(id));
}