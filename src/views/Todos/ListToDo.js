import React from "react";
import AddTodo from "./AddTodo";

import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Homework" },
      { id: "todo2", title: "Housework" },
      { id: "todo3", title: "Clean house" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Bạn đã thêm thành công");
  };

  handleDelTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete success");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listCopy = [...listTodos];

      let objIndex = listCopy.findIndex((item) => item.id === todo.id);

      listCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listCopy,
        editTodo: {},
      });
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let copy = { ...this.state.editTodo };
    copy.title = event.target.value;
    this.setState({
      editTodo: copy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>>>", isEmptyObj);
    return (
      <>
        <h3>Simple to do app</h3>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            <p>Test</p>
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      /* {<input value={item.title}/> }*/
                      <>
                        {editTodo.id === item.id ? (
                          <>
                            <span>{index + 1} - </span>
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDelTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
