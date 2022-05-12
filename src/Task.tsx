import React from "react";
import {useDispatch} from "react-redux";
import {changeCheckedTaskAC, removeTaskAC} from "./state/task-reducer";

export function Task(props: any) {
    const dispatch = useDispatch()

    let onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCheckedTaskAC(props.id))
    }

    let removeTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(removeTaskAC(props.id))
    }

    return <div>
        <div>
            <input type="checkbox"
                   checked={props.isDone}
                   onChange={onChangeHandler}
            />
            {props.title}
            <button onClick={removeTask}>X</button>
        </div>
    </div>

}