import React, { Component } from "react";

class Card extends Component<{
  className?: string;
}> {
  state = {
    stage: "init"
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        stage: "enter"
      });
    }, 300);
  }

  render() {
    return (
      <div
        className={`fade ${this.state.stage}`}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "orange"
        }}
      >
        card
      </div>
    );
  }
}

export default Card;
