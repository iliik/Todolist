import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTsaks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("active")

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTsaks(filteredTasks)
    }

    function addTask(title:string){
        let newTask = {
            id: v1(),
            title:title,
            isDone: false};
        let newtasks = [newTask, ...tasks];
        setTsaks(newtasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to Learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
