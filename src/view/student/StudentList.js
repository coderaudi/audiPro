import React, { Component } from "react";
import { Table } from "reactstrap";

import TableRow from "../../component/tables/studentTable";
class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [
        {
          name: "abhijeet",
          age: 21,
          roll: "20140759"
        },
        {
          name: "shweta",
          age: 21,
          roll: "20140760"
        },
        {
          name: "maddy",
          age: 21,
          roll: "20140756"
        }
      ]
    };
  }
  render() {
    let studentListRow = this.state.studentList.map((student, index) => {
      return <TableRow student={student} key={index} />;
    });

    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>First Name</th>
              <th> Age</th>
              <th>Roll NO</th>
            </tr>
          </thead>
          <tbody>{studentListRow}</tbody>
        </Table>
      </div>
    );
  }
}

export default StudentList;
