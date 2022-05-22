import React, {useState} from "react";

type propsType = {
    addTodolistOrTask: (text: string) => void
}

export function InputForCreate(props: propsType) {
    let [textInput, setTextInput] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.currentTarget.value)
        setError(null)
    }

    const addTodolistOrTask = () => {
        if (textInput.trim() !== '') {
            props.addTodolistOrTask(textInput)
            setTextInput('')
        } else {
            setError('ERROR')
        }
    }

    const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodolistOrTask()
        }
    }


    return <div>
        <input className={error ? 'errorInput' : ''}
               type="text"
               value={textInput}
               onChange={onChangeTextHandler}
               onKeyPress={onKeyPressEnter}
        />
        <button onClick={addTodolistOrTask}>+</button>
        <div className='error'>{error}</div>
    </div>;
}