import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
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

  useEffect(() => {
    //call Spotify API
    const artist = CallArtist();
    setArtist(artist.name);
  }, [setArtist]);

  const view = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{favouriteArtist}</p>
        <p>Favourite Artist without fetch {artist}</p>
      </header>
    </div>
  );
  return view;
}

export default App;
