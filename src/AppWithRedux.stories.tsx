import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";
import AppWithRedux from "./AppWithRedux";

export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux
}


export const AppWithReduxBaseExample = (props: any) => {
    return <>
        <AppWithRedux/>

    </>
}