import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: TaskType[]
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    remuveTodolist:(todolistId:string)=>void

}

export const Tobolist = (props: PropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.id);
            setTitle('');
        } else {
            setError('ERROR')
        }
    }
    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onComplitedClickhandler = () => {
        props.changeFilter('complited', props.id)
    }
    const remuveTodolist =()=>{
        props.remuveTodolist(props.id)
    }
    return (
        <div>
            <h3>{props.title} <button onClick={remuveTodolist}>Delite</button></h3>
            <div>
                <input value={title} onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? 'error' : ''}/>
                <button onClick={addTask}>+</button>
                {error && <div className='errorMessage'>{error}</div>}
            </div>
            <ul>
                {props.tasks.map(t => {
                    const onRemuveHandler = () => {
                        props.removeTask(t.id, props.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                    }
                    return <li key={t.id} className={t.isDone ? 'isDone' : ''}><input
                        type={"checkbox"}
                        checked={t.isDone}
                        onChange={onChangeHandler}/><span>{t.title}</span>
                        <button onClick={onRemuveHandler}>x</button>
                    </li>
                })}
            </ul>

            <div>

                <button className={props.filter === 'all' ? 'activeFilter' : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? 'activeFilter' : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'complited' ? 'activeFilter' : ''}
                        onClick={onComplitedClickhandler}>Complited
                </button>
            </div>
        </div>
    )
};