import React from 'react';
import ToDoItems from './ToDoItems';

const ToDoList = (props)=> {
    return (
        <div className="todo-container"> 
            <ul className='todo-list'>
                {
                    props.FilterToDo.map((item , i)=>{
                     return   <ToDoItems Todo ={item}  Todos={props.Todos} setTodos={props.setTodos} key={item.id}  item={item.text}  />
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;
