import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string)=>void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')

    const onChangeTitleHandler =(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)
    const activateVieMode = () => {
        setEditMode(true)
        props.onChange(title)
    }
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    return editMode
    ? <input value={title} onChange={onChangeTitleHandler} onBlur={activateVieMode} autoFocus/>
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
}