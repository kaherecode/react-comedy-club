import React, { useState, useEffect } from "react";
import "./App.css";

function Joke(props) {
  return (
    <div className="joke">
      <p className="setup">{props.joke.setup}...</p>
      <p className="punchline">{props.joke.punchline}</p>
    </div>
  );
}

function App() {
  const [joke, setJoke] = useState({
    setup: ``,
    punchline: ``
  });

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(resp => resp.json())
      .then(data => setJoke(data[0]));
  }

  return (
    <div className="App">
      <Joke joke={joke} />
      <button className="btn" onClick={() => fetchJoke()}>
        another one
      </button>
      <a
        className="tweet btn"
        href={
          "https://twitter.com/intent/tweet?text=" +
          joke.setup +
          " " +
          joke.punchline +
          " &via=alioukahere&hashtags=reactcomedyclub,kaherecode"
        }
        target="_blank"
      >
        tweet
      </a>
    </div>
  );
}

export default App;
