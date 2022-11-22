import {useEffect, useState} from "react";
import axios from "axios";
import {todolistApi} from "../api/todolists-api";

export default {
    title: "API"
}

export const GetTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodolists('bla la bla')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = " "
        todolistApi.deleteTodolists(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        todolistApi.updateTodolists(todolistId,"Dimych Hallo")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
