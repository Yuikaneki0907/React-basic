import React from "react";
import "./Demo.css";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDel = (job) => {
    this.props.delJob(job);
  };

  render() {
    // let age = this.props.age;

    //tên biến trùng tên key của props
    let { name, age, address, arrJobs } = this.props;
    let a = "";
    let { showJobs } = this.state;
    //Toán tử 3 ngôi
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check: ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide() }className="btnShow" style={{backgroundColor: "yellow"}}>Show</button>
          </div>
        ) : (
          /*{ <p>Child component: {name} - {age} - {address}</p>} */
          <>
            <div className="job-list">
              {
                (a = arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}
                      <></>{" "}
                      <span onClick={() => this.handleOnClickDel(item)}>x</span>
                    </div>
                  );
                }))
              }

              {console.log(">>> a: ", a)}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   console.log(">>> Props", props);
//   let a = '';
//   return (
//     <>
//       <div>Arrow function</div>
//       <div>
//         {console.log(props)}
//         {/* <p>Child component: {name} - {age} - {address}</p> */}
//         <div className="job-list">
//           {
//             (a = props.arrJobs.map((item, index) => {
//               if(+item.salary>= 500){
//                 return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}$
//                 </div>
//               );
//               }

//             }))
//           }

//           {console.log(">>> a: ", a)}
//         </div>
//       </div>
//     </>
//   );
// };

export default ChildComponent;
