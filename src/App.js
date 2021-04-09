import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import { useEffect, useState } from 'react';

function App () {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const api = 'https://official-joke-api.appspot.com/random_joke';
    fetch(api)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo {...joke} fetchAPI={fetchAPI}/>
      </header>
    </div>
  );
}

export default App;
