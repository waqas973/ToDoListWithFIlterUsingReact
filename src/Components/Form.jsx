import React from 'react';

const Form = (props)=> {

    const InputHandler = (e)=>{
       props.setInput(e.target.value);
    }
    const submitHandler = (e)=>{
       e.preventDefault();
       props.setTodos((OldVal)=>{
         return [
            ...OldVal ,
            {text:props.Input , completed:false , id:Math.random() * 1000 }  
         ]   
       })
       props.setInput("");
     }
    const statusHandler = (e)=>{
       props.setStatus(e.target.value);
    } 
    return (
       <form >
           <input type="text" name="input-field"  className="todo-input" autoComplete="off" onChange={InputHandler} value={props.Input} />
           <button className="todo-button" type="submit" onClick={submitHandler} >
             <i className="fas fa-plus-square"></i>
           </button>
           <div className="select">
              <select name="filter" className='filter-todo' onChange={statusHandler} >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>
           </div>

       </form>

)}

export default Form;
