import React, { Component } from "react";

export default class extends Component<{
  className?: string;
}> {
  render() {
    return (
      <div
        className={this.props.className}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "yellow"
        }}
      >
        Entry
      </div>
    );
  }
}
