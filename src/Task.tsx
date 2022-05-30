import React from "react";
import {useDispatch} from "react-redux";

export function Task(props: any) {

    // let onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch(changeCheckedTaskAC(props.id))
    // }
    //
    // let removeTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     dispatch(removeTaskAC(props.id))
    // }

    return <div key={props.task.id}>
        <input type='checkbox'/>
        {props.task.title}
    </div>
}