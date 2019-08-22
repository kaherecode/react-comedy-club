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
    setup: `What's the best thing about a Boolean?`,
    punchline: `Even if you're wrong, you're only off by a bit.`
  });

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <Joke joke={joke} />
      <Button />
    </div>
  );
}

export default App;
