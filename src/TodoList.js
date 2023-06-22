import React from 'react'
import TodoListItem from './TodoListItem';

const todoList = [
  {
      id: 1,
      title: 'one'
  },
  {   id: 2,
      title: 'two'
  },

  {   id: 3,
      title: 'three'
  }
  ];

  function TodoList(){
    return(
    
      <ul>
        {todoList.map(function(todo) {
          return (
            <TodoListItem key={todo.id} todo={todo} />
          );
        })}
      </ul>
    ) 
 
  
}
export default TodoList;