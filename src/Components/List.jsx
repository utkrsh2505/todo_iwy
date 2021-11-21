import React, { useState } from "react";
import Header from "./Header";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
const List = () => {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updateTodos = todos.map(
      (item) => (item.id = id ? { ...item, status: !item.status } : item)
    );
    setTodos(updateTodos);
  };

  return (
    <>
      <Header title="ToDo" />
      <ListInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => {
        return (
          <ListItem
            title={todo.title}
            id={todo.id}
            status={todo.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
      ;
    </>
  );
};
export default List;
