import React, { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const inputRef = useRef();

  const handleAdd = () => {
    setTodo([...Todo, { title: inputRef.current?.value, done: false }]);
    inputRef.current.value = "";
  };
  const handleRemove = (index) => {
    setTodo(Todo.filter((item, i) => i !== index));
  };
  function handleDone(id) {
    const currentTodoIndex = Todo.findIndex((todo, index) => index === id);
    const updatedTodo = {
      ...Todo[currentTodoIndex],
      done: !Todo[currentTodoIndex].done,
    };
    const newTodos = [
      ...Todo.slice(0, currentTodoIndex),
      updatedTodo,
      ...Todo.slice(currentTodoIndex + 1),
    ];
    setTodo(newTodos);
  }

  useEffect(() => {
    console.log(Todo);
  }, [Todo]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Todo List</h1>
      <div style={{ padding: 5, display: "flex", gap: 10 }}>
        <input
          style={{
            height: 30,
            borderRadius: "5px",
            outline: "none",
            border: "0.5px solid grey",
          }}
          ref={inputRef}
        />
        <button
          style={{
            height: 32,
            backgroundColor: "lightcyan",
            border: "0.5px solid black",
            cursor: "pointer",
          }}
          onClick={handleAdd}
        >
          + Add Todo
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 600,
          height: 500,
          paddingTop: 20,
          gap: 5,
          backgroundColor: "#C9CFB5",
          overflowY: "auto",
        }}
      >
        <div style={{ gap: 5, display: "flex", flexDirection: "column" }}>
          {Todo &&
            Todo.map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid black",
                  height: 50,
                  width: 300,
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: item.done === true ? "#91DF68" : "#F7F7F3",
                }}
              >
                <div style={{ paddingLeft: 10, gap: 10, display: "flex" }}>
                  <input type="checkbox" onChange={() => handleDone(i)}></input>
                  {item.title}
                </div>
                <button
                  style={{ marginRight: 10 }}
                  onClick={() => handleRemove(i)}
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
