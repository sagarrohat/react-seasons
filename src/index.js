import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// In class based Component React expect us to write other functions but we extends
// React.Component so that we dont need to write those functions.
class App extends React.Component {
  /*
  // Very first funtion which will be called when this App is created.
  // will recive props object
  constructor(props) {
    super(props); // This is IMPORTANT

    // Must init state object
    // state is a JS object
    // Only updated with setState function
    this.state = { lat: null, errorMessage: "" };
  }
  */

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My Component was rendered to the screen.");

    // Get Current Location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Always call setState when changing state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    // render method will be called before this method
    console.log("My Component was just updated - it rerendered.");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request." />;
  }

  // React ask to write this method
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
