import React from "react";

function TableRow(props) {
  const student = props.student;

  return (
    <tr>
      <td />
      <td> {student.name}</td>
      <td>{student.age}</td>
      <td>{student.roll}</td>
    </tr>
  );
}

export default TableRow;
