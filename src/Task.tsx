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
        {/*<input type="checkbox"*/}
        {/*       checked={props.isDone}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*/>*/}
        {/*{props.title}*/}
        {/*<button onClick={removeTask}>X</button>*/}
        {/*return <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}>*/}
        {/*<input type="checkbox"*/}
        {/*       checked={props.task.status === TaskStatuses.Completed}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*/>*/}

        {/*<EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>*/}
        {/*<IconButton onClick={onClickHandler}>*/}
        {/*    <Delete/>*/}
        {/*</IconButton>*/}
    </div>
}