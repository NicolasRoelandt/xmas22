import "react-datepicker/dist/react-datepicker.css";

import DatePicker, { registerLocale } from "react-datepicker";

import React from "react";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

export default function _DatePicker({ date, onSelectDate, onSelect }) {
  const isAfter = (date) => date > new Date("Mar 1, 2023");

  return (
    <>
      <div> Choisi la date que tu veux </div>
      <DatePicker
        dateFormat="dd/MM"
        filterDate={(date) => isAfter(date)}
        selected={date}
        onSelect={onSelect}
        onChange={onSelectDate}
        locale="fr"
      />
    </>
  );
}
