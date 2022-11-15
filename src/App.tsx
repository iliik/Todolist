import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsPropsType = {
    id: string
    title: string
    filter: FilterValuesType

}

function App() {

    function removeTask(id: string,todolistId:string) {
        let tasks = tasksobj[todolistId]
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksobj[todolistId] = filteredTasks
        setTasksobj({...tasksobj});
    }

    function addTask(title: string,todolistId:string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksobj[todolistId]
        let newTasks = [task, ...tasks];
        tasksobj[todolistId]= newTasks
        setTasksobj({...tasksobj});
    }

    let changeStatus = (taskId: string, isDone: boolean,todolistId:string) => {
        let tasks = tasksobj[todolistId]
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
        }
        setTasksobj({...tasksobj})
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(t => t.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists]);
        }
    }
    let removeTodolist = (todolistId:string) =>{
       let filterToddolist = todolists.filter(t=> t.id !== todolistId)
       setTodolists(filterToddolist)
    }


    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<TodolistsPropsType[]>([
        {id: v1(), title: 'Whate to learn', filter: 'all'},
        {id: v1(), title: 'Whate to Buy', filter: 'completed'},
    ])

    let [tasksobj, setTasksobj] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Book", isDone: true},
            {id: v1(), title: "Dtift", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ]
    })


    return (
        <div className="App">

            {todolists.map((t) => {
                let tasksForTodolist = tasksobj[t.id];

                if (t.filter === "active") {
                    tasksForTodolist = tasksobj[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === "completed") {
                    tasksForTodolist = tasksobj[t.id].filter(t => t.isDone === true);
                }

                return <Todolist
                    key={t.id}
                    id={t.id}
                    title={t.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeStatus={changeStatus}
                    filter={t.filter}
                    removeTodolist={removeTodolist}/>

            })}


        </div>
    );
}

export default App;
