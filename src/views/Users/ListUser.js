import React from "react";
import axios from "axios";
import { withRouter } from "../HOC/withRouter";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  //   componentDidMount() {
  //     axios
  //       .get("https://reqres.in/api/users?page=2", {
  //         headers: { "x-api-key": "reqres-free-v1" },
  //       })
  //       .then((res) => {
  //         console.log(">>> ", res);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching users:", err);
  //       });
  //   }

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2", {
      headers: { "x-api-key": "reqres-free-v1" },
    });
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(">>> ", res);
  }

  handleViewDetail = (user) =>{
    console.log(">>>>> check props", this.props)
    // this.props.router.navigate(`/user/${user.id}`)
    window.location.href = `/user/${user.id}`
  }

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">
          <h1>Fetch all list users</h1>
        </div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              {
                return (
                  <div className="child" key={item.id}
                  onClick={() => this.handleViewDetail(item)}>
                    {index + 1} - {item.first_name} {item.last_name}
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
