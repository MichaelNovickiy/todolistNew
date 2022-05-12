import React from "react";
import {useDispatch,} from "react-redux";
import {InputText} from "./InputText";
import {addTaskAC, TaskType,} from "./state/task-reducer";
import {Task} from "./Task";
import {changeFilterAC} from "./state/todolist-reducer";


export function Todolist(props: any) {
    const dispatch = useDispatch()

    const addTask = (text: string) => {
        dispatch(addTaskAC(text))
    }

    return <div>
        <div style={{color: 'green'}}>

            {props.title}

            <InputText addTask={addTask}/>

            {props.tasks.map((t: TaskType) => {
                return <Task id={t.id}
                             title={t.title}
                             isDone={t.isDone}
                />
            })}

            <button onClick={(e) => {
                dispatch(changeFilterAC('all'))
            }
            }>ALL
            </button>
            <button onClick={(e) => {
                dispatch(changeFilterAC('active'))
            }
            }>ACTIVE
            </button>
            <button onClick={(e) => {
                dispatch(changeFilterAC('completed'))
            }
            }>COMPLETED
            </button>
        </div>
    </div>;
}