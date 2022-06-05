import React from "react"

export default function TimeArea() {
  const [theTime, setTime] = React.useState(new Date().toLocaleString());

  setTimeout(function () {
    setTime(new Date().toLocaleString());
  }, 1000);

  return <p>The current time is {theTime}.</p>;
}
