import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import List from "./components/List/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app_belowHeader">
          <Main />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
