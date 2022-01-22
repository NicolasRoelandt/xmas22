import DatePicker from "./DatePicker.react";
import Options from "./Options.react";
import React from "react";
import { useEffect } from "react";

export default function Castle() {
  const [showOptions, setShowOptions] = React.useState(false);
  const [treatment, setTreatment] = React.useState(null);
  const [date, setDate] = React.useState(new Date("March 26, 2022"));
  const [datePicked, setDatePicked] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setShowOptions(true), 3000);
  });
  return (
    <div style={{ position: "relative" }}>
      <img style={{ height: "100vh" }} src="./hotel.jpeg" />
      {showOptions && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px black solid",
            padding: 16,
            borderRadius: 8,
            color: "black",
            fontWeight: "1000",
            fontSize: "1.2em",
            lineHeight: "2em",
          }}
        >
          {treatment == null ? (
            <>
              <DatePicker
                date={date}
                onSelectDate={setDate}
                onSelect={() => setDatePicked(true)}
              />
              {datePicked && <Options onChoseTreatment={setTreatment} />}
            </>
          ) : (
            <div
              style={{
                fontWeight: "400",
                fontSize: "1em",
                lineHeight: "1.2em",
              }}
            >
              <p>
                {"Ce sera le weekend du " +
                  date.toLocaleDateString("fr-FR") +
                  " et comprend"}
              </p>
              <li> une nuit du samedi au dimanche a Pennyhill park</li>
              <li> acces illimite au SPA</li>
              <li> {"une heure de " + treatment}</li>
              <p>Maintenant ton Nico s'occupe de tout ❤️</p>
              <p> Joyeux 31 ans! Je t'aime </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
