import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export const todolistApi = {
    getTodolists() {
        const promise = axios.get("users")
        return promise
    },
    createTodolists(title: string) {
        const promise = axios.post("users", {title: "Dmimych todolist"}, settings)
        return promise
    },
    deleteTodolists(id: string) {
        const promise = axios.delete("todo-lists", title:"Dmimych todolist")
        return promise
    },
    updateTodolists(id: string, title: string) {
        return instance.put("todo-lists", {title: "YoYOYO"})
    }
}