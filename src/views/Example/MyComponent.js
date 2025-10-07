import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Dev", salary: "500" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "PM", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs
    });
    console.log("check", job);
  };

  delJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} delJob={this.delJob} />
        {/* <ChildComponent name={'child two'}/>
        <ChildComponent name={'child three'}/> */}
      </>
    );
  }
}

export default MyComponent;
