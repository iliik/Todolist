import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

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
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    remuveTodolist: (todolistId: string) => void
    chengTodolistTitle:(newTitle:string, id:string)=>void
}

export const Tobolist = (props: PropsType) => {

    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onComplitedClickhandler = () => {
        props.changeFilter('complited', props.id)
    }
    const remuveTodolist = () => {
        props.remuveTodolist(props.id)
    }
    const addTask =(title:string)=>{
        props.addTask(title,props.id)
    }
    const chengTodolistTitle = (newTitle:string) => {
        props.chengTodolistTitle(props.id, newTitle)
    }
    return (
        <div>
            <h3><EditableSpan title={props.title} onChange={chengTodolistTitle}/>
                <button onClick={remuveTodolist}>Delite</button>
            </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {props.tasks.map(t => {
                    const onRemuveHandler = () => {
                        props.removeTask(t.id, props.id)
                    }
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                    }
                    const onChangeTitleHandler = (newValue:string) => {
                        props.changeTaskTitle(t.id, newValue, props.id)
                    }
                    return <li key={t.id} className={t.isDone ? 'isDone' : ''}><input
                        type={"checkbox"}
                        checked={t.isDone}
                        onChange={onChangeStatusHandler}/>
                        <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
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

