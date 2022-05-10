import React from "react";
import {useSelector} from "react-redux";

export function Task(props: any) {
    // @ts-ignore
    // let task = useSelector(store => store.todolists)
    console.log(props.name)
    return <div>
        <input type="checkbox"/>
        {props.name}
        <button>X</button>
    </div>;
}