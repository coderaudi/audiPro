import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../actions/index";
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
class NotePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };

    this.submitDataHandler = this.submitDataHandler.bind(this);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitDataHandler = event => {
    let note = this.state.note;
    this.props.addNote(note);
  };

  render() {
    return (
      <div>
        <center>
          <Grid item xs={8}>
            <Paper>
              <h1>
                {" "}
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />{" "}
                NOteBOok
              </h1>
              <div className="panel panel-default">
                <div className="panel-body">
                  <FormControl>
                    <InputLabel htmlFor="component-simple">
                      Add New Note
                    </InputLabel>
                    <Input
                      name="note"
                      type="text"
                      onChange={this.onChange.bind(this)}
                    />
                  </FormControl>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submitDataHandler}
                  >
                    Add Note
                  </Button>
                </div>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <hr />
                    {this.props.webInfo.copyRightText}
                  </div>
                </div>
              </div>
            </Paper>
            <Paper>
              <div className="panel panel-default">
                <div className="panel-body">
                  <hr />
                  {this.props.notePadNotes.map((obj, index) => {
                    return (
                      <h1>
                        {obj.id} {obj.title} <hr />
                      </h1>
                    );
                  })}
                </div>
              </div>
            </Paper>
          </Grid>
        </center>
      </div>
    );
  }
}

const mapStateToProps = ({ admin, webInfo, notePad }) => {
  return {
    myAdminMobile: admin.adminMobile,
    webInfo,
    notePadNotes: notePad.titleList
  };
};

export default connect(
  mapStateToProps,
  {
    addNote
  }
)(NotePad);
