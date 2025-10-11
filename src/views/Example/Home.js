import React from "react";
import Color from "../HOC/Color";
import TestImg from "../../assets/images/testimg.jpg";
import { connect } from "react-redux";
// import {withRouter} from "react-router-dom"

class Home extends React.Component {

    handleDel = (user) =>{
        console.log("delete", user)
        this.props.delUserRedux(user)
    }

    handleCreateUser = () =>{
        this.props.addUserRedux()
    }
  render() {
    console.log(">>>>", this.props.dataRedux);

    let listUsers = this.props.dataRedux;
    return (
      <div>
        <p>Hello form Home </p>
        <img src={TestImg} style={{ width: "100px" }}></img>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} <span style={{cursor: "pointer"}} onClick={() => this.handleDel(item)}>x</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUser()}>Add new</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        delUserRedux: (userdel) => dispatch({type: 'DELETE_USER', payload: userdel}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// export default  withRouter(Home);
