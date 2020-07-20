import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">{this.props.message}</div>
      </div>
    );
  }
}

// Default values for props when not passed.
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
