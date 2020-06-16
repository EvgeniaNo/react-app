import React from "react";

import Card from "./Card";
import Form from "./Form";
import ListGroup from "./ListGroup";

function BodyContent() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <ListGroup></ListGroup>
        </div>
        <div className="col-8">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col-4" style={{ height: "440px" }}>
          <Card />
        </div>
      </div>
    </>
  );
}

export default BodyContent;
