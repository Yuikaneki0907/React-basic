import React from "react";
import AddTodo from "./AddTodo";

  import { toast } from 'react-toastify';

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Homework" },
      { id: "todo2", title: "Housework" },
      { id: "todo3", title: "Clean house" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo]
    })
    
    toast.success('Bạn đã thêm thành công')
  }
  render() {
    let { listTodos } = this.state;
    return (
      <>
        <h3>Simple to do app</h3>
        <div className="list-todo-container">
          <AddTodo addNewTodo = {this.addNewTodo}/>
          <div className="list-todo-content">
            <p>Test</p>
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {index + 1} - {item.title}
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
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
