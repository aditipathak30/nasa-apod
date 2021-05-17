import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
class App extends Component {
  state = {
    date: "",
    photo: ""
  };
  changeDate = e => {
    e.preventDefault();
    dateFromInput= e.target[0].value
    this.setState({ date: dateFromInput });
  };
render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput
          changeDate={this.changeDate}
          date={this.state.date}
        />
        <PhotoContainer date={this.state.date} />
      </div>
    );
  }
}
export default App;