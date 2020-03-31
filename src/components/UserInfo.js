import React, { Component } from "react";

class UserInfoComponent extends Component {
  render() {
    const { username } = this.props;
    return <p>UserInfoComponent {username}</p>;
  }
}

export const UserInfo = UserInfoComponent;
