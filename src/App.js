import React, { useState, useEffect } from "react";
import "./App.css";

function Button(props) {
  return <button>another one</button>;
}

function Joke(props) {
  return (
    <div className="joke">
      <p className="setup">{props.joke.setup}</p>
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
      <button onClick={() => fetchJoke()}>another one</button>
    </div>
  );
}

export default App;
