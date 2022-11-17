import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Task Component',
    component: Task
}


const callback = action('Button add was pressed inside the from')

const changeTaskStatusCallback = action('Status change')
const changeTaskTitleCallback = action('Title change')
const removeTaskCallback = action('Task change')


export const TaskBaseExample = (props: any) => {
    return <>
        <Task changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}
              removeTask={removeTaskCallback}
              task={{id: '1', isDone: true, title: 'CSS'}}
              todolistId={'todolistId1'}/>
        <Task changeTaskStatus={props.changeTaskStatus}
              changeTaskTitle={props.changeTaskTitle}
              removeTask={props.removeTask}
              task={{id: '2', isDone: false, title: 'JS'}}
              todolistId={'todolistId2'}/>
    </>
}