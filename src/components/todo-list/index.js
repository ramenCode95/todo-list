import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./index.css";

const TodoList = ({ listTodo = [], onEditTodo, onDeleteTodo }) => {
  return (
    <>
      {listTodo &&
        listTodo.map((objTodo) => (
          <div className="todo" key={objTodo.id}>
            <div>{objTodo.value}</div>
            <div>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => onEditTodo(objTodo.id)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => onDeleteTodo(objTodo.id)}>
                  <DeleteIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoList;
