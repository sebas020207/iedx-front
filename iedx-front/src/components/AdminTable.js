import React from "react";
import "../css/table.css";

const AdminTable = (props) => {
  return (
    <table style={props.style} className={props.className}>
      { props.children }
     </table>
  );
};

export default AdminTable;
