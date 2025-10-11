import axios from "axios";
import React from "react";
import { withRouter } from "../HOC/withRouter";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
  async componentDidMount() {
    if (this.props && this.props) {
      let id = this.props.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`, {headers: { "x-api-key": "reqres-free-v1" }});
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      })
      console.log(">>>>>>> check:", res)
    }
  }
  handleBack = () =>{
    window.location.href ='/user'
  }

  render() {
    // console.log(">>>>", this.props);
    let {user} = this.state
    let isEmptyObj = Object.keys(user).length === 0;
    return (<div>
    
    <p>Hello users with id: {this.props.params.id}</p>
    {isEmptyObj === false && 
    <><p>User's name: {user.first_name} {user.last_name}</p>
    <p>Email: {user.email}</p>
    <img src={user.avatar}></img></>}
    <div><button type="button" onClick={() => this.handleBack()}>Back</button></div>
    </div>)
  }
}

export default withRouter(DetailUser);
