import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan
}


const callback = action('Button add was pressed inside the from')

const changeCallback = action('Status change')


export const EditableSpanBaseExample = (props: any) => {
    return <>
        <EditableSpan value={'Start value'} onChange={changeCallback}/>

    </>
}