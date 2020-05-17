import React from "react";

export default function ListGroup() {
  return (
    <>
      <ul className="list-group h-100">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Updates
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Offers
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Notifications
          <span className="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    </>
  );
}
