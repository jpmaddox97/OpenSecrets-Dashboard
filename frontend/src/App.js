import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    setWord("");
  };

  return (
    <div>
      <Header title="Open Secrets Clone" word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
};

export default App;
