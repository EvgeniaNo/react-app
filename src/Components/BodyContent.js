import React from "react";
import ListGroup from "./ListGroup";
import Form from "./Form";
import Card from "./Card";

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
