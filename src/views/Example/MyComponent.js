import React from "react";

/*
    Jsx => return a block 
    React.Fragment 
*/
class MyComponent extends React.Component {
    state = {
        name: "lee",
        age: 21
    }

    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    handleOnClickBtn = () => {
        alert("click me");
    }
  render() {
    // let name = "Lee";
    return (
      <>
        <div>
            <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
            Hello {this.state.name}</div>
        <div className="name">ggggg</div>
        <div className="third">
            <button className="btnClick" onClick={() => this.handleOnClickBtn()}>Click me!</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
