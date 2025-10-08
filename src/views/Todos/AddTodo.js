import React from "react";
  import { toast } from 'react-toastify';

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if(!this.state.title){
        toast.error("Thêm thất bại")
        return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
        title: ''
    })
  };
  render() {
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)}
          />
          <button
            type="add"
            onClick={() => {
              this.handleAddTodo();
            }}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
