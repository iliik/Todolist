import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string,todolistId:string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string,todolistId:string) => void
    changeStatus: (taskId: string, isDone: boolean,todolistId:string) => void
    filter: FilterValuesType
    removeTodolist:(todolistId:string)=>void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask( title.trim(),props.id);
            setTitle("");
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
            setError(null)
        }
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
const onClickDeleteTodolist = () => {
    props.removeTodolist(props.id)
}
    return <div>
        <h3>
            {props.title}
            <button onClick={onClickDeleteTodolist}>Delete</button>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>Add</button>
            {error && <div className='errorMessage'> {error}</div>}
        </div>
        <ul>
            {props.tasks.map(t => {

                const onClickHandler = () => props.removeTask(t.id,props.id)
                const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)

                return <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                    <input type="checkbox" checked={t.isDone} onChange={onChangeInput}/>
                    <span>{t.title}</span>
                    <button onClick={onClickHandler}>Delete</button>
                </li>
            })}
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
