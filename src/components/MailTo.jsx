import React from "react";

export default function Mailto() {
  const handleClick = () => {
    window.location.href =
      "mailto:obada.baracat1@gmail.com?subject=Hello Ubba!&body=Let's Connect!";
  };
  return <button onClick={handleClick}>Mail Me</button>;
}
