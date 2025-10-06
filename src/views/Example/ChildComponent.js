import React from "react";

class ChildComponent extends React.Component {
  render() {
    // let age = this.props.age;

    //tên biến trùng tên key của props
    let { name, age, address, arrJobs } = this.props;
    let a ='';
    return (
      <>
        <div>
          {console.log(this.props)}
          {/* <p>Child component: {name} - {age} - {address}</p> */}
          <div className="job-list">

            { a = arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              )
            })}

            {console.log('>>> a: ', a)}
          </div>
        </div>
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
