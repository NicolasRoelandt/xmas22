import DatePicker from "./DatePicker.react";
import Options from "./Options.react";
import React from "react";
import { useEffect } from "react";

export default function Show() {
  const [showTitle, setShowTitle] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);
  const [treatment, setTreatment] = React.useState(null);
  const [date, setDate] = React.useState(new Date("March 1, 2023"));
  const [datePicked, setDatePicked] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 1500);
    setTimeout(() => setShowOptions(true), 3000);
  });
  return (
    <div style={{ position: "relative" }}>
      <video
        playsInline
        autoPlay
        loop
        poster="https://uk.matildathemusical.com/content/themes/matilda/build/images/hero2022.png"
      >
        <source
          src="https://uk.matildathemusical.com/content/themes/matilda/build/images/hero_vid_desk.mp4"
          type="video/mp4"
        />
      </video>
      {showTitle && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 50,
            width: "100%",
            minWidth: "100%",
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            fontWeight: "1000",
            fontSize: "1.2em",
            lineHeight: "2em",
          }}
        >
          Mathilda The Musical
        </div>
      )}
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
          {!datePicked ? (
            <DatePicker
              date={date}
              onSelectDate={setDate}
              onSelect={() => setDatePicked(true)}
            />
          ) : (
            <div
              style={{
                fontWeight: "400",
                fontSize: "1em",
                lineHeight: "1.2em",
              }}
            >
              <p>
                {`On ira voir Mathilda le ${date.toLocaleDateString("fr-FR")}!`}
              </p>
              <p> Maintenant ton Nico s'occupe de tout ❤️</p>
              <p> Joyeux Noël Mel! Je t'aime </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
