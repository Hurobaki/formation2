import React, { Component } from "react";
import { CenterLayout } from "../layouts/CenterLayout";

class HeaderComponent extends Component {
  render() {
    return (
      <CenterLayout bgCustomColor={"purple"}>
        <header style={styles.header}>Github Explorer</header>
      </CenterLayout>
    );
  }
}

const styles = {
  header: {
    color: "black",
    fontSize: 50
  }
};

export const Header = HeaderComponent;
