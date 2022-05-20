import React, {useEffect} from "react";
import './Styles.css';
import {useDispatch,} from "react-redux";
import {fetchTasksTC,} from "./state/task-reducer";
import {Task} from "./Task";


export function Todolist(props: any) {
    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchTasksTC(props.id)
        // @ts-ignore
        dispatch(thunk)
    }, [])

    return <div>
        <div>
            <h3>{props.title}</h3>

            {/*<InputText />*/}
            {
                props.tasks.map((t: any) => <Task key={t.id} task={t} todolistId={props.id}
                />)
            }
            {/*{*/}
            {/*    props.tasks.map((t: any) => <div key={t.id}>1</div>)*/}
            {/*}*/}
            {/*{*/}
            {/*    props.task.map((t: any) => <Task key={t.id} title={t.title}*/}
            {/*    />)*/}
            {/*}*/}
            {/*{*/}
            {/*    props.task.map((t: any) => <div>{t}</div>)*/}
            {/*}*/}

            {/*{props.tasks.map((t: any) => {*/}
            {/*    return <Task*/}
            {/*        id={t.id}*/}
            {/*        title={t.title}*/}
            {/*    />*/}
            {/*})}*/}

            <button className={props.filter === 'all' ? 'active' : ''}>ALL
            </button>
            <button className={props.filter === 'active' ? 'active' : ''}>ACTIVE
            </button>
            <button className={props.filter === 'completed' ? 'active' : ''}>COMPLETED
            </button>
        </div>
    </div>;
}