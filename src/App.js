import './App.css';
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
function App() {
  return (
    <div className="App">
      <h1> Todo List:</h1>
        <ul>
            {todoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    </div>
  );
};
