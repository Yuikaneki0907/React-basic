import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
      fname: "",
      lname: "",
      arrJobs: [
        {id: 'abcJob1', title: 'Dev', salary: '500'},
        {id: 'abcJob2', title: 'Tester', salary: '400'},
        {id: 'abcJob3', title: 'PM', salary: '1000'}
      ]
    }
    handleChangefname = (event) => {
      this.setState({
        fname: event.target.value
      })
    }
    handleChangelname = (event) => {
      this.setState({
        lname: event.target.value
      })
    }
    handleSubmit = (event) =>{
      event.preventDefault(); //ngăn chặn hành động reload
      alert(`Your name: ${this.state.fname} ${this.state.lname}`)
    }
  render() {
    
    return (
      <>
        <div>
            <h1>My form</h1>
            <form>
              <label htmlFor="fname">First name</label>
              <input type="text" 
              value={this.state.fname}
              onChange={(event) => this.handleChangefname(event)}/>
              <br/>
              <label htmlFor="lname">Last name</label>  
              <input type="text" value={this.state.lname} onChange={(event) => this.handleChangelname(event)}/>
              <br/>
              <button type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </form>
        </div>
        <ChildComponent name={this.state.fname}
        age = {'21'} address = {'Hà Nội'}
        arrJobs = {this.state.arrJobs}/>
        {/* <ChildComponent name={'child two'}/>
        <ChildComponent name={'child three'}/> */}
      </>
    );
  }
}

export default MyComponent;
