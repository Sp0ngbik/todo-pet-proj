import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const setTodoFunc = (todoItem) => {
    setTodoList([todoItem, ...todoList]);
  };
  return (
    <div>
      <div>
        <input
          placeholder="Write your todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodoFunc(todo);
          }}
        >
          Add
        </button>
        <div>
          {todoList.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
