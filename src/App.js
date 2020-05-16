import React, { useEffect, useState } from "react";

import { CallArtist } from "./CallArtist";
import { CallFetch } from "./CallFetch";
import NavigationBar from "./NavigationBar";

import "./App.css";

function App() {
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
      <NavigationBar></NavigationBar>
      <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <p>{favouriteQuote}</p>
      </div>
    </>
  );
}

export default App;
