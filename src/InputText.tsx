import React, {useState} from "react";

type propsType = {
    addTask: (text: string) => void
}

export function InputText(props: propsType) {
    let [textInput, setTextInput] = useState<string>('')

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(textInput)
        setTextInput('')
    }

    return <div>
        <input type="text"
               value={textInput}
               onChange={onChangeTextHandler}
        />
        <button onClick={addTask}>+</button>
    </div>;
}