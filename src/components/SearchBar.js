import React, { Component } from "react";
import { SearchInput, Button } from "evergreen-ui";
import { CenterLayout } from "../layouts/CenterLayout";

class SearchBarComponent extends Component {
  state = {
    searchInputValue: ""
  };

  onChangeHandler = ({ target: { value: searchInputValue } }) =>
    this.setState({
      searchInputValue
    });

  onPressHandler = () => {
    const { onUsernameChange } = this.props;
    const { searchInputValue } = this.state;

    onUsernameChange(searchInputValue);
  };

  onKeyDownHandler = ({ keyCode }) => {
    // 13 = code touche entrée
    if (keyCode === 13) {
      this.onPressHandler();
    }
  };

  render() {
    const { searchInputValue } = this.state;

    return (
      <CenterLayout bgCustomColor={"tomato"}>
        <SearchInput
          value={searchInputValue}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
        />
        <Button
          appearance="primary"
          style={{ marginLeft: 10 }}
          onClick={this.onPressHandler}
        >
          Search
        </Button>
      </CenterLayout>
    );
  }
}

export const SearchBar = SearchBarComponent;
