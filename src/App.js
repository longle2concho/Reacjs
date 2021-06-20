
import { useState } from 'react';
import './App.css';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'an' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
   ]);
   function handletodoClick(todo){
     console.log(todo)
     const index =todoList.findIndex(x=>x.id===todo.id);
     if(index<0) return;
     const newtodoList=[...todoList];
     newtodoList.splice(index,1); 
     setTodoList(newtodoList);
   }
   function HandletodoFormSubmit(FormValues){
     console.log('FormSubmit:',FormValues);
     //add a new todo current todo List//
     const newtodo ={
       id:todoList.length + 1,...FormValues,
     }
     const newtodoList=[...todoList]
     newtodoList.push(newtodo);
     setTodoList(newtodoList);
   }
    return (
    <div className="App">
      <h1> React Hook</h1>
      <TodoList todos={todoList} ontodoClick={handletodoClick}/>
      <TodoForm onSubmit={HandletodoFormSubmit}/>
    </div> 
  );
}

export default App;
