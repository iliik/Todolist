import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void

}

export const Todolist = (props: PropsType) => {
        const [newTaskTitle, setnewTaskTitle] = useState("");

        const onNewTitleChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
            setnewTaskTitle(e.currentTarget.value)
        }
        const addTask = () => {
            props.addTask(newTaskTitle);
            setnewTaskTitle("");
        }
        const onAllClickHendler = () => props.changeFilter("all")
        const onActiveClickHendler = () => props.changeFilter("active")
        const onCompletedClickHendler = () => props.changeFilter("completed")

        return (
            <div className="App">
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input value={newTaskTitle} onChange={onNewTitleChangeHendler}/>
                        <button onClick={addTask}>+</button>
                    </div>
                    <ul>
                        {props.tasks.map((t) => {
                            const onRemoveHendler = () => {
                                props.removeTask(t.id)
                            }

                            return (<li key={t.id}><input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={onRemoveHendler}>x</button>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <button onClick={onAllClickHendler}>All</button>
                        <button onClick={onActiveClickHendler}>Active</button>
                        <button onClick={onCompletedClickHendler}>Completed</button>
                    </div>
                </div>
            </div>
        )
    }
;