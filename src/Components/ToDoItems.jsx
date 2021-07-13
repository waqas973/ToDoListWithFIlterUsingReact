import React, { useState } from 'react';

const  ToDoItems = (props)=> {

    const deleteHandler = ()=>{
        props.setTodos(
            props.Todos.filter((item)=>{
                  return    props.Todo.id !== item.id
            })
        ) 
               
    }
 const completeHandler = ()=>{
     props.setTodos(
        props.Todos.map((item)=>{
           if(item.id === props.Todo.id){
               return {
                   ...item,
                   completed : !item.completed
               }
           }
         return item;
        })
     )}
    return (
        <div className="todo">
            <li className={`todo-item   ${props.Todo.completed ? "completed" : ""}`}>{props.item}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn " onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default ToDoItems;
