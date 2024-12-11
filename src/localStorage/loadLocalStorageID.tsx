import {LocalStorageKeys} from "./LocalStorageKeys.tsx";

export function loadLocalStorageID(maxID: number): number {
    const id = localStorage.getItem(LocalStorageKeys.ID)

    return id ? JSON.parse(id) : maxID;
}