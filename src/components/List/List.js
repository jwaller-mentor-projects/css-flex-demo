import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Rufus", "Max", "Lilly", "Sam", "Tommy"]
    };
  }

  render() {
    let puppyNames = this.state.names.map((name, ind) => {
      return (
        <div key={ind}>
          <div>{name}</div>
        </div>
      );
    });

    return (
      <div className="right_panel">
        <div className="list_wrapper">
          <h3>List of Puppy Names</h3>
          <div className="list_items">{puppyNames}</div>
        </div>
      </div>
    );
  }
}

export default List;
