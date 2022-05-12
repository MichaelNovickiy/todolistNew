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
    const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(textInput)
            setTextInput('')
        }
    }


    return <div>
        <input type="text"
               value={textInput}
               onChange={onChangeTextHandler}
               onKeyPress={onKeyPressEnter}
        />
        <button onClick={addTask}>+</button>
    </div>;
}