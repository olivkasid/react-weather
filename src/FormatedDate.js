import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  if (hours < 0) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {days[day]} {hours}:{minutes}
    </div>
  );
}
