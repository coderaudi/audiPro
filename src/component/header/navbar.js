import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
class NavBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "recents"
    };
  }

  handleChange = event => {
    this.setState({
      value: event.value
    });
  };

  render() {
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={event => this.handleChange(event)}
        className={""}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default NavBarMenu;
