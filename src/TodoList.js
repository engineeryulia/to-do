import React from 'react'
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
        {todoList.map(function (item) {
        return<li key={item.id}>{item.title}</li>;
        })}
      </ul>
    ) 
 
  
}
export default TodoList;