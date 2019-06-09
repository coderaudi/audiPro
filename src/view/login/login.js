import React, { Component } from "react";
import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      admin: {
        username: "admin",
        password: "admin",
        adminMessage: "you are not logged In "
      }
    };

    this.submitDataHandler = this.submitDataHandler.bind(this);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitDataHandler = event => {
    let data = {
      username: this.state.userName,
      password: this.state.passWord
    };
    // console.log(event);
    // console.log(data);

    data.username === data.password
      ? this.setState({
          admin: {
            username: "admin",
            password: "admin",
            adminMessage: "welcome Admin  "
          }
        })
      : this.setState({
          admin: {
            username: "admin",
            password: "admin",
            adminMessage: "try again  "
          }
        });
  };

  render() {
    return (
      <div>
        <center>
          <Grid item xs={8}>
            <Paper>
              Login page
              <div className="panel panel-default">
                <div className="panel-body">
                  <FormControl>
                    <InputLabel htmlFor="component-simple">Username</InputLabel>
                    <Input
                      name="userName"
                      type="text"
                      onChange={this.onChange.bind(this)}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input
                      name="passWord"
                      type="password"
                      onChange={this.onChange.bind(this)}
                    />
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submitDataHandler}
                  >
                    Submit
                  </Button>
                </div>
                <div className="panel panel-default">
                  <div className="panel-body">
                    {this.state.admin.adminMessage}
                    {this.props.myAdminMobile}
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </center>
      </div>
    );
  }
}

const mapStateToProps = ({ admin }) => {
  return {
    myAdminMobile: admin.adminMobile
  };
};

export default connect(mapStateToProps)(Login);
