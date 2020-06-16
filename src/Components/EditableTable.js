import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function EditableTable(props) {
  function onClickHandler() {
    setTable(table.slice(0, -1));
  }

  const [table, setTable] = useState([1, 2, 3, 4]);
  return (
    <div>
      <div>[{table.join(", ")}]</div>
      <Button color="primary" onClick={onClickHandler}>
        Delete a number
      </Button>
    </div>
  );
}

export default EditableTable;
