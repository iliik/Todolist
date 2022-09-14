import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange:(newValue:string)=>void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let[editMode, seteditMode]= useState(false)
    let[title, setTitle]= useState('')
   const activatedEditMod =()=>{
        seteditMode(true)
       setTitle(props.title)
    }
   const activatedViewMod =()=> {
       seteditMode(false)
       props.onChange(title)
   }
const onChengTitleHandler = (e:ChangeEvent<HTMLInputElement>) =>setTitle(e.currentTarget.value)
    return editMode
    ? <input value={title} onChange={onChengTitleHandler} onBlur={activatedViewMod} autoFocus/>
        : <span onDoubleClick={activatedEditMod}>{props.title}</span>
}