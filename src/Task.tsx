import React from "react";

export function Task(props: any) {
    return <div>
        <input type="checkbox"/>
        {props.title}
        <button>X</button>
    </div>;
}