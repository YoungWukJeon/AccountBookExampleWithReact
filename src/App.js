import React, { Component } from "react";
import "./App.css";

import AccountBookForm from "./components/AccountBookForm";

class App extends Component {
  add = data => {
    console.log(data);
  };

  render() {
    return <AccountBookForm onAdd={this.add} />;
  }
}

export default App;
