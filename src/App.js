import "./App.css";

import Castle from "./Castle.react";
import React from "react";
import logo from "./logo.svg";

function App() {
  const [giftOpen, setGiftOpen] = React.useState(false);
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
          src="./Mel.jpeg"
        />
        <span
          style={{
            margin: "auto",
            fontWeight: "1000",
            fontSize: "2.5em",
            lineHeight: "2em",
          }}
        >
          Les 31 ans de la Petite Prout
        </span>
      </div>
      <header className="App-header">
        {giftOpen ? (
          <Castle />
        ) : (
          <>
            <p>Joyeux 31 ans Mel!</p>
            <p>Clique sur ton cadeau pour l'ouvrir</p>
            <img
              onClick={() => setGiftOpen(true)}
              src="./gift.png"
              className="App-logo"
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
