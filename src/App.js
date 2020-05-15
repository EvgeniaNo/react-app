import React, { useEffect, useState } from "react";
import "./App.css";
import { CallFetch } from "./CallFetch";
import { CallArtist } from "./CallArtist";

function App() {
  const [favouriteArtist, setFavouriteArtist] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    //call Spotify API
    CallFetch().then((data) => setFavouriteArtist(data.items[0].name));
  });

  function onClickHandler() {
    const artist = CallArtist();
    setArtist(artist.name);
  }

  const view = (
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
      <p>{favouriteArtist}</p>
    </div>
  );
  return view;
}

export default App;
