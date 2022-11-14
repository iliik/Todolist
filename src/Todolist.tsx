import React, {ChangeEvent, useState} from "react";
import {FilterTaskType, TaskType} from "./App";


export type TodolistType = {
    title: string
    tasks: TaskType[]
    removeTasks: (id: string) => void
    changeFilter: (value: FilterTaskType) => void
    addTasks: (title: string) => void
}

export const Todolist = (props: TodolistType) => {
    const [value, setValue] = useState('')
    const onChangHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onOnclickHandler = () => {
        props.addTasks(value)
        setValue('')
    }
    const onClickButtonAll = () => {
        props.changeFilter('all')
    }
    const onClickButtonActive = () => {
        props.changeFilter('active')
    }
    const onClickButtonCompleted = () => {
        props.changeFilter('completed')
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={value} onChange={onChangHandler}/>
                <button onClick={onOnclickHandler}>Add</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    const onClickTaskButton = () => {
                        props.removeTasks(t.id)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                        <button onClick={onClickTaskButton}>Delete</button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={onClickButtonAll}>All</button>
                <button onClick={onClickButtonActive}>Active</button>
                <button onClick={onClickButtonCompleted}>Completed</button>
            </div>
        </div>
    )

}