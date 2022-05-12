import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {InputText} from "./InputText";
import {addTaskAC, TasksStateType,} from "./state/task-reducer";
import {Task} from "./Task";


export function Todolist(props: any) {
    // // @ts-ignore
    // const todolists = useSelector(state => state.todolists)
    // // @ts-ignore
    // const tasks: any = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTaskAC())
    }
    let tasksForTodolist = props.tasks

    return <div>
        <div style={{color: 'green', textAlign: 'center'}}>
            {props.name}
            <InputText onClick={addTask}/>
        </div>
        <div>
            {
                tasksForTodolist.map((t: any) => <Task
                    key={t.id}
                    task={t}
                    todolistId={props.id}
                />)
            }
        </div>
    </div>;
}