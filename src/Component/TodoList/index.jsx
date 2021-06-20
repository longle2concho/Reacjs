import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todo: PropTypes.array.isRequired,
    ontodoClick: PropTypes.func,
};
TodoList.defaultProps={
    todos:[],
    ontodoClick: null,
};
function TodoList(props) {
    const { todos , ontodoClick }= props;
    function handleClick(todo){
        if(ontodoClick){
            ontodoClick(todo)
        }
    }
    return (
     <ul className='todo-List'>
         {todos.map(todo => (
             <li key={todo.id}
              onClick={()=>handleClick(todo)}
              >
                 {todo.title}
            </li>
         ))}
     </ul>   
    );
}

export default TodoList;