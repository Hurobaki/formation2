import React, { Component } from "react";

class CenterLayoutComponent extends Component {
  render() {
    const { children, bgCustomColor } = this.props;

    return (
      <div style={{ ...styles.container, backgroundColor: bgCustomColor }}>
        {children}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 16
  }
};

export const CenterLayout = CenterLayoutComponent;
