import React, {useEffect} from 'react'
import {TaskStatuses, TaskType} from "./api/todolist-api";
import {FilterValuesType} from "./state/todolist-reducer";
import {useDispatch} from "react-redux";
import {fetchTasksTC} from "./state/task-reducer";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTodolist: (id: string) => void
    filter: FilterValuesType
}

export const Todolist = React.memo(function (props: PropsType) {

    const dispatch = useDispatch()
    useEffect(() => {
        const thunk = fetchTasksTC(props.id)
        // @ts-ignore
        dispatch(thunk)
    }, [])

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    let tasksForTodolist = props.tasks

    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }


    return <div>
        <h3>{props.title}
            {/*@ts-ignore*/}
            <button onClick={() => removeTodolist(props.id)}>X</button>
        </h3>
        <div>
            {
                tasksForTodolist.map(t => <div key={t.id}>{t.id}</div>)
                //     <Task key={t.id} task={t} todolistId={props.id}/>
                //
            }
        </div>

        <button className={props.filter === 'all' ? 'active' : ''}>ALL
        </button>
        <button className={props.filter === 'active' ? 'active' : ''}>ACTIVE
        </button>
        <button className={props.filter === 'completed' ? 'active' : ''}>COMPLETED
        </button>
    </div>;
})