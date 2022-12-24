import "./App.css";

import Show from "./Show.react";
import React from "react";
import logo from "./logo.svg";

function App() {
  const [giftOpen, setGiftOpen] = React.useState(false);
  const [donePlaying, setDonePlaying] = React.useState(false);

  React.useEffect(() => {
    document
      .querySelector("#music")
      .addEventListener("ended", () => setDonePlaying(true), false);
  }, [setDonePlaying]);

  return (
    <div className="App">
      <div
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          width: "100%",
          backgroundColor: "#282c34",
          color: "white",
          textAlign: "left",
          display: "flex",
        }}
      >
        <img
          style={{
            height: 100,
            marginLeft: 32,
            marginRight: 16,
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: "50%",
          }}
          src="./MelNoel.jpeg"
        />
        <span
          style={{
            margin: "auto",
            fontWeight: "1000",
            fontSize: "2.5em",
            lineHeight: "2em",
          }}
        >
          Le Noël de la Petite Prout
        </span>
      </div>
      <header className="App-header">
        {giftOpen ? (
          <Show />
        ) : (
          <>
            <p>Joyeux Noël Mel!</p>
            <p>Tu veux savoir ton cadeau? Un petit indice:</p>
            <audio controls id="music">
              <source src="./mathilda_sound.mp4" type="audio/mpeg" />
            </audio>
            {donePlaying && (
              <>
                <p>Tu as deviné? Ouvre ton cadeau!</p>
                <img
                  onClick={() => setGiftOpen(true)}
                  src="./gift.png"
                  className="App-logo"
                />
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
