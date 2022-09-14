import React, {useState} from 'react';
import './App.css';
import {TaskType, Tobolist} from "./Tobolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = 'all' | 'complited' | 'active'
export type TobolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskStateProps = {
    [key: string]: TaskType[]
}

export function App() {
    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId]
        let filterebTasks = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filterebTasks
        setTasks({...tasksObj})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todolistId]
        let newTasks = [task, ...tasks];
        tasksObj[todolistId] = newTasks
        setTasks({...tasksObj})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId]
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj})
        }
    }

    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        let tasks = tasksObj[todolistId]
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.title = newTitle
            setTasks({...tasksObj})
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }
    function chengTodolistTitle (newTitle:string, id:string){
    const todolist = todolists.find(t=>t.id === id)
        if(todolist){
            todolist.title = newTitle
            setTodolists([...todolists])
        }
    }

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<TobolistType[]>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let remuveTodolist = (todolistId: string) => {
        let filterTodolist = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(filterTodolist)
        delete tasksObj[todolistId]
        setTasks({...tasksObj})
    }

    let [tasksObj, setTasks] = useState<TaskStateProps>({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'REACTJS', isDone: false},
            {id: v1(), title: 'REDUX', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Book', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
        ]
    })

    function addtodolist(title: string) {
        let todolist: TobolistType = {
            id: v1(),
            filter: 'all',
            title: title

        }
        setTodolists([todolist, ...todolists])
        setTasks({...tasksObj, [todolist.id]: []})
    }

    return (
        <div className="App">
            <AddItemForm addItem={addtodolist}/>
            {
                todolists.map((tl) => {
                    let tasksForTodolist = tasksObj[tl.id]
                    if (tl.filter === 'complited') {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true)
                    }
                    if (tl.filter === 'active') {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false)
                    }
                    return <Tobolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        changeTaskTitle={changeTaskTitle}
                        filter={tl.filter}
                        remuveTodolist={remuveTodolist}
                        chengTodolistTitle={chengTodolistTitle}/>
                })
            }
        </div>
    );
};


