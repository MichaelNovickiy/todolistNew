import React, {useEffect} from "react";
import './Styles.css';
import {useDispatch,} from "react-redux";
import {fetchTasksTC,} from "./state/task-reducer";
import {Task} from "./Task";
import {deleteTodolistsTC} from "./state/todolist-reducer";


export function Todolist(props: any) {
    const dispatch = useDispatch()

    let deleteTodolists = (todolistId: string) => {
        // @ts-ignore
        dispatch(deleteTodolistsTC(todolistId))
    }

    useEffect(() => {
        const thunk = fetchTasksTC(props.id)
        // @ts-ignore
        dispatch(thunk)
    }, [])


    return <div>

        <div>
            <h3>{props.title}
                {/*@ts-ignore*/}
                <button onClick={()=>deleteTodolists(props.id)}>X</button>
            </h3>

            {/*<InputText />*/}
            {
                props.tasks.map((t: any) => <Task key={t.id} task={t} todolistId={props.id}
                />)
            }
            <button className={props.filter === 'all' ? 'active' : ''}>ALL
            </button>
            <button className={props.filter === 'active' ? 'active' : ''}>ACTIVE
            </button>
            <button className={props.filter === 'completed' ? 'active' : ''}>COMPLETED
            </button>
        </div>
    </div>;
}