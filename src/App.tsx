import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterTaskType = 'all' | 'active' | "completed"


function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "Type", isDone: false},
        {id: v1(), title: "Storybook", isDone: true},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "Css", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterTaskType>('all')

    let taskForTodolist = tasks
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active')
        taskForTodolist = tasks.filter(t => t.isDone === false)

    let changeFilter = (value: FilterTaskType) => {
        setFilter(value)

    }

    let removeTasks = (id: string) => {
        let filterTasks = tasks.filter(t => t.id !== id)
        setTasks(filterTasks)
    }
    let addTasks = (title:string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <Todolist
                title="Whate to learn"
                tasks={taskForTodolist}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
                addTasks={addTasks}/>

        </div>
    );
}

export default App;
