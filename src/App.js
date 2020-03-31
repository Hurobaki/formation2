import React, { Component } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { UserInfo } from "./components/UserInfo";

export default class App extends Component {
  state = {
    username: ""
  };

  onUsernameChangeHandler = newUsername => {
    this.setState({
      username: newUsername
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header />
        <SearchBar onUsernameChange={this.onUsernameChangeHandler} />
        <UserInfo username={username} />
      </div>
    );
  }
}
