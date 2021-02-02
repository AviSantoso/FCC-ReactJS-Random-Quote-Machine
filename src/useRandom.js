import React from "react";

export default function useRandom(max = 0) {
  const [number, setNumber] = React.useState(0);

  function randomize() {
    setNumber(Math.floor(Math.random() * max));
  }

  return {
    number,
    randomize
  };
}
