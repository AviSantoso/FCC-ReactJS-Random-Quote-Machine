import React from "react";
import useRandom from "./useRandom";
import slugify from "slugify";
import "./styles.css";

import { quotes } from "./quotes.json";

export default function App() {
  const { number, randomize } = useRandom(quotes.length);

  const quote = quotes[number];

  return (
    <div id="quote-box" className="container margin-m">
      <h1 className="text-align-center">Random Quote Generator</h1>
      <p id="text" className="lead lead-l text-align-center">
        "{quote.text}"
      </p>
      <p id="author" className="lead lead-s text-align-center">
        - {quote.author}
      </p>
      <div id="buttons" className="margin-vertical-xs">
        <a
          href={`http://twitter.com/intent/tweet/?text=${slugify(
            quote.text,
            "%20"
          )}`}
          id="tweet-quote"
          className="button button-l button-primary button-pill margin-xs"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          className="button button-l button-primary button-pill margin-xs"
          onClick={randomize}
        >
          <i className="fas fa-random"></i>
        </button>
      </div>
    </div>
  );
}
