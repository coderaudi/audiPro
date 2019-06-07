import React, { Component } from "react";
import { connect } from "react-redux";
import { getAdminName } from "../actions/authActions";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    this.props.getAdminName("Abhijet");
    return <div> student portal web Footer store name new branch design</div>;
  }
}

const mapStateToProps = admin => ({
  adminName: admin.adminName
});

export default connect(
  mapStateToProps,
  { getAdminName }
)(Footer);
