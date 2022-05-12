import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodolistAC} from "./state/todolist-reducer";

export function Task(props: any) {
    // @ts-ignore
    // let task = useSelector(store => store.todolists)


    return <div>

        <div>
            <input type="checkbox"/>
            {props.task.title}
            <button>X</button>
        </div>
        <button>ALL</button>
        <button>ACTIVE</button>
        <button>COMPLETED</button>
    </div>

}