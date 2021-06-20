
import { useState } from 'react';
import './App.css';
import TodoList from './Component/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
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
    return (
    <div className="App">
      <h1> React Hook</h1>
      <TodoList todos={todoList} ontodoClick={handletodoClick}/>
    </div> 
  );
}

export default App;
