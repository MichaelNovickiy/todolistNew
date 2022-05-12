import React from "react";

type propsType = {
    onClick?: () => void
}

export function InputText(props: propsType) {
    return <div>
        <input type="text"/>
        <button onClick={props.onClick}>+</button>
    </div>;
}