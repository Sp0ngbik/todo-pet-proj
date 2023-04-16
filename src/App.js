import { useState } from "react";
import style from "./style.module.scss";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const setTodoFunc = (todoItem) => {
    setTodoList([todoItem, ...todoList]);
  };
  const funcDeleteTodo = (todoIndex) => {
    todoList.splice(todoIndex, 1);
    setTodoList([...todoList]);
  };

  return (
    <div>
      <div className={style.todoBlock}>
        <div className={style.textZone}>
          <textarea
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
        </div>
        <div>
          <div className={style.noteBlock}>
            {todoList.map((el, index) => {
              return (
                <div key={index} className={style.noteElement}>
                  <textarea defaultValue={el}></textarea>
                  <button
                    onClick={() => {
                      funcDeleteTodo(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
