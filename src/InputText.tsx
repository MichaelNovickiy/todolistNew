import React, {useState} from "react";

type propsType = {
    addItem: (text: string) => void
}

export function InputForCreate(props: propsType) {
    let [textInput, setTextInput] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (textInput.trim() !== '') {
            props.addItem(textInput)
            setTextInput('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.currentTarget.value)
    }


    const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.key === 'Enter') {
            addItem()
        }
    }


    return <div>
        <input className={error ? 'errorInput' : ''}
               type="text"
               value={textInput}
               onChange={onChangeTextHandler}
               onKeyPress={onKeyPressEnter}
        />
        <button onClick={addItem}>+</button>
        <div className='error'>{error}</div>
    </div>;
}