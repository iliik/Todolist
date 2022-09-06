import React, {useState} from 'react';
import './App.css';
import {TaskType, Tobolist} from "./Tobolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'complited' | 'active'

export function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'REACTJS', isDone: false},
        {id: v1(), title: 'REDUX', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')
    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }
    function removeTask(id: string) {
        let filterebTasks = tasks.filter(t => t.id !== id)
        setTasks(filterebTasks)
    }
    function addTask(title: string) {
        let newTask = {id: v1(), title, isDone: true}
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)

    }
    function changeStatus (taskId: string, isDone:boolean){
        let task = tasks.find( t => t.id === taskId)
        if(task) {
            task.isDone = isDone
        }
        setTasks([...tasks])

    }
    let tasksForTodolist = tasks
    if (filter === 'complited') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Tobolist title={'What to Learn'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}


