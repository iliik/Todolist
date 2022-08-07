import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


let tasks1: Array<TaskType> = [
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 2, title: "React", isDone: false},
]

let tasks2: Array<TaskType> = [
    {id: 1, title: "Terminator", isDone: true},
    {id: 2, title: "XXX", isDone: false},
    {id: 2, title: "Jentelmens of fortune", isDone: true},
]


function App() {
    return (
        <div className="App">
            <Todolist title="What to Learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    );
}

export default App;
