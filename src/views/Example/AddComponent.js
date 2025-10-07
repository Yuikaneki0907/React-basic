import React from "react";

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: '',
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault(); //ngăn chặn hành động reload
    console.log(this.state);
    if(!this.state.title || !this.state.salary){
      alert("Điền đủ thông tin")
      return
    }
    this.props.addNewJob(
      {
        id: Math.floor(Math.random()*11),
        title: this.state.title,
        salary: this.state.salary
      }
    );
    this.setState({
      title: '',
      salary: ''
    })
  };
  render() {
    return (
      <>
        <div>Add component</div>
        <div>
          <h1>My form</h1>
          <form>
            <label htmlFor="title">Title </label>
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangeTitle(event)}
            />
            <br />
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              value={this.state.salary}
              onChange={(event) => this.handleChangeSalary(event)}
            />
            <br />
            <button
              type="submit"
              value="Submit"
              onClick={(event) => this.handleSubmit(event)}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddComponent;
