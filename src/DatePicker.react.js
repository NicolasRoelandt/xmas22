import "react-datepicker/dist/react-datepicker.css";

import DatePicker, { registerLocale } from "react-datepicker";

import React from "react";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

export default function _DatePicker({ date, onSelectDate, onSelect }) {
  const isWeekend = (date) => {
    const day = date.getDay();
    return day == 0 || day == 6;
  };

  const isAfter = (date) => date > new Date("March 25, 2022");

  return (
    <>
      <div> Quel weekend ? </div>
      <DatePicker
        dateFormat="dd/MM"
        filterDate={(date) => isWeekend(date) && isAfter(date)}
        selected={date}
        onSelect={onSelect}
        onChange={onSelectDate}
        locale="fr"
      />
    </>
  );
}
