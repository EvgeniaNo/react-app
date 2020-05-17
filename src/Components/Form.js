import React, { useEffect, useState } from "react";
import { CallArtist } from "../CallArtist";
import { CallFetch } from "../CallFetch";

export default function Form() {
  const [favouriteQuote, setFavouriteQuote] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    //call Sample API
    CallFetch().then((data) => setFavouriteQuote(data));
  });

  function onClickHandler() {
    const artist = CallArtist();
    setArtist(artist.name);
  }
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "150px" }}
      >
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div className="form">
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={onClickHandler}
          >
            load
          </button>
          <span style={{ display: "block" }}>{artist}</span>
        </div>
        <div>{favouriteQuote}</div>
      </div>
    </>
  );
}
