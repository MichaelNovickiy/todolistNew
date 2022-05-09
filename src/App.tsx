import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {useSelector} from "react-redux";


function App() {
    // @ts-ignore
    const todolist = useSelector(state => state.todolists)

    return (
        <div className='Main'>
            <Todolist name={todolist.name}/>
        </div>
    );
}

export default App;
