import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [Input , setInput] = useState("");
  const [Todos , setTodos] = useState([]);
  const [Status , setStatus] = useState("all");
  const [FilterToDo , setFilterTodo] = useState([]);

  useEffect(()=>{
    filterHandler();
  },[Todos,Status]);
  
  const filterHandler  = ()=>{
    switch(Status){
      case "completed":
        setFilterTodo(Todos.filter(item=> item.completed === true ))
        break;
      case "uncompleted":
        setFilterTodo(Todos.filter(item=> item.completed === false ))   
        break;
      default:
        setFilterTodo(Todos);
        break;
        }
     
      }
   return (
    <div className="App">
      <header>
        <h1>TODO List </h1>
      </header>
      <Form Todos={Todos} setTodos={setTodos} Input={Input} setInput={setInput}
      setStatus={setStatus} />
      <ToDoList Todos = {Todos} setTodos = {setTodos} FilterToDo={FilterToDo} />
    </div>
  );
}

export default App;
