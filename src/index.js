import React from "react";
import ReactDOM from "react-dom";

// In class based Component React expect us to write other functions but we extends
// React.Component so that we dont need to write those functions.
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Hi There!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
