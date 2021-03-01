import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Navbar from './components/Navbar/Navbar.component';
import Results from './components/Results/Results.component';
import requests from './requests';

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
