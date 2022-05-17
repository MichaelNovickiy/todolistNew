import React, {useState} from "react";

type propsType = {
    addTask: (text: string) => void
}

export function InputText(props: propsType) {
    let [textInput, setTextInput] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.currentTarget.value)
        setError(null)
    }

    const addTask = () => {
        if (textInput.trim() !== '') {
            props.addTask(textInput)
            setTextInput('')
        } else {
            setError('ERROR')
        }
    }

    const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }


    return <div>
        <input className={error ? 'errorInput' : ''}
               type="text"
               value={textInput}
               onChange={onChangeTextHandler}
               onKeyPress={onKeyPressEnter}
        />
        <button onClick={addTask}>+</button>
        <div className='error'>{error}</div>
    </div>;
}