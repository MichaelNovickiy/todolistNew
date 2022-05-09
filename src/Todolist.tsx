import React from "react";
import {Task} from "./Task";
import {useDispatch, useSelector} from "react-redux";
import { addTaskAC } from "./state/todolist-reducer";

export function Todolist(props: any) {
    // @ts-ignore
    const todolists = useSelector(state => state.todolists)
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTaskAC())
        console.log(todolists)
    }
    return <>
        <h3>{props.name}</h3>
        <div>
            <input type="text"/>
            <button onClick={addTask}>+</button>
        </div>
        <Task title='titleOne'/>
        <Task/>
        <Task/>
        <button>ALL</button>
        <button>ACTIVE</button>
        <button>COMPLETED</button>
    </>;
}