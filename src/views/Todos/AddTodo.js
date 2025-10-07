import React from "react";

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
        alert('Phải điền đủ thông tin');
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
