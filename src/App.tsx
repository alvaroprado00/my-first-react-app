
import './App.css';
import { TodoTable } from './components/TodoTable';
import React, {useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';

function App() {

  // Stateful variable used to change the visibility of the form

  const [showForm, setShowForm]=useState(false)

  // Here I am going to create a list with all the todos

  const [todos, setTodos]=useState([
    {rowNumber:1, rowDescription:'Feed Dog', rowAssigned:'Eric'},
    {rowNumber:2, rowDescription:'Clean Kitchen', rowAssigned:'Eric'},
    {rowNumber:3, rowDescription:'Go for a Walk', rowAssigned:'Robert'},
    {rowNumber:4, rowDescription:'Buy Food', rowAssigned:'Alexa'},
    {rowNumber:5, rowDescription:'Brush the cat', rowAssigned:'Marga'},
  ])

  // Arrow function for adding a todo

  const addTodo= (description:string, assigned:string) => {

    let rowNumber=0;
    if(todos.length>0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
    if(todos.length>0){
      const newTodo = {
        rowNumber:rowNumber,
        rowDescription:description,
        rowAssigned:assigned
      }
      setTodos(todos => [...todos, newTodo])
 
    }
  }

  // Arrow function for deleting a todo
  const deleteTodo = (rowNumberToDelete:number) => {

    let filtered = todos.filter(function(value){
      return value.rowNumber !== rowNumberToDelete;
    })

    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
       <div className='card'>
        <div className='card-header'>
          My table
        </div>
        <div className='card-body'>
          <TodoTable tableContent={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary mt-3' onClick={()=>{setShowForm(!showForm)}}>
            {showForm? 'Close Form':'Add Todo'}
          </button>
          {showForm&&
              <NewTodoForm addTodo={addTodo}/> 
          }
        </div>

       </div>
    </div>
  );
}

export default App;
