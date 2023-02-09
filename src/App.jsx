import { useState } from "react";
import "./App.css";
import Button from "./Button";

let count = 1;

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleAdd() {
    const todo = {
      title: text,
      done: false,
      id: count++,
    };

    const newList = [...list];
    newList.push(todo);
    setList(newList);
  }

  function handleDone(id, done) {
    const newList = [...list];
    for (let i = 0; i < newList.length; i++) {
      const todo = newList[i];

      if (todo.id == id) {
        todo.done = !done;
      }
    }

    setList(newList);
  }

  return (
    <div className="p-8">
      <input
        type="text"
        onChange={handleChange}
        className="border-2 border-gray-400"
      />
      <Button
        title="Add Todo"
        onClick={handleAdd}
        color="primary"
        size="large"
      />

      {list.map((todo) => {
        return (
          <div className={`p-2 ${todo.done ? "line-through" : ""}`}>
            {todo.title}
            <Button
              title={todo.done ? "Undo" : "Done"}
              onClick={() => {
                handleDone(todo.id, todo.done);
              }}
              color="green"
              size="small"
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
