import React from "react";

export default function Footer() {
  return (
    <footer className="bg-info text-center fixed-bottom">
      <div className="row">
        <div className="col">
          <p className="font-weight-bold">Company</p>
          <p>Learn our story here</p>
        </div>
        <div className="col">
          <p className="font-weight-bold">Development</p>
          <p>A page for developers. Find information for the API</p>
        </div>
        <div className="col">
          <p className="font-weight-bold">Carreers</p>
          <p>Find information here</p>
        </div>
      </div>
      <div className="bg-dark text-light">
        <span>2020 Copyright</span>
        <a href="!#" className="d-block">
          Company Name
        </a>
      </div>
    </footer>
  );
}
