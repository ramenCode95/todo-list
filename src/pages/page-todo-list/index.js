import React, { useState } from "react";
import TodoList from "../../components/todo-list";
import "./index.css";
import { Button, TextField } from "@material-ui/core";
/**
 * listTodo[{text, id}]
 */
const PageTodoList = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);

  const [isAddTodo, setIsAddTodo] = useState(true);
  const [idEditTodo, setIdEditTodo] = useState("");

  const onClickButton = () => {
    if (isAddTodo) {
      if (todo) {
        setListTodo([
          ...listTodo,
          {
            id: new Date().toISOString(),
            value: todo,
          },
        ]);
      }
    } else {
      setListTodo([
        ...listTodo.map((objTodo) => ({
          ...objTodo,
          value: objTodo.id === idEditTodo ? todo : objTodo.value,
        })),
      ]);
      setIsAddTodo(!isAddTodo);
    }
    setTodo("");
  };

  const onChangeInput = (event) => {
    setTodo(event.target.value);
  };

  const onEditTodo = (id) => {
    setTodo(listTodo.find((obj) => obj.id === id).value);
    setIsAddTodo(!isAddTodo);
    setIdEditTodo(id);
  };

  const onDeleteTodo = (id) => {
    setListTodo(listTodo.filter((obj) => obj.id !== id));
  };

  return (
    <div className="pageTodoList__container">
      <p> TODO LIST</p>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={todo}
        onChange={onChangeInput}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={onClickButton}
        className="pageTodoList__container--button"
      >
        {isAddTodo ? "Agregar" : "Editar"}
      </Button>
      <hr />
      <TodoList
        listTodo={listTodo}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
};

export default PageTodoList;
