import React from "react";

export default function Card() {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Lana Del Rey</h5>
          <h6 className="card-subtitle mb-2 text-muted">Lust for Life</h6>
          <p className="card-text">
            Elizabeth Woolridge Grant (born June 21, 1985), better known by her
            stage name Lana Del Rey, is an American singer and songwriter.
          </p>
          <a href="https://lanadelrey.com" className="card-link">
            Website
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Lana_Del_Rey"
            className="card-link"
          >
            Wikipedia
          </a>
        </div>
      </div>
    </>
  );
}
