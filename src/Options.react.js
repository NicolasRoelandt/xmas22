import React from "react";

export default function Options({ onChoseTreatment }) {
  return (
    <>
      <div>Choisis ton traitement</div>
      <button onClick={() => onChoseTreatment("soin facial")}>
        <img style={{ height: 100 }} src="./face.jpeg" />
        <div>1h facial</div>
      </button>
      <span style={{ width: 8 }}> </span>
      <button onClick={() => onChoseTreatment("massage")}>
        <img style={{ height: 100 }} src="./massage.jpeg" />
        <div>1h massage</div>
      </button>
    </>
  );
}
