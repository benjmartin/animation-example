import React, { Component } from "react";
import "./App.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cardExpand: false };
  }

  toggleExpand = () => {
    this.setState({ cardExpand: !this.state.cardExpand });
  };

  render() {
    const { cardExpand } = this.state;

    return (
      <div className="cardContainer">
        {!cardExpand ? (
          <div className="card">
            <button onClick={this.toggleExpand}>Click Me</button>test 1
          </div>
        ) : (
          <div className="cardFullWidth">test 1</div>
        )}
        <div className="card">test 2</div>
        <div className="card">test 3</div>
      </div>
    );
  }
}
