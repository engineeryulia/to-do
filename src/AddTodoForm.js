import React from 'react';

function AddTodoForm(){
  return(
    <form>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" />
      <button id="Add" type="text">Submit</button>
    </form>
  )
}

export default AddTodoForm;