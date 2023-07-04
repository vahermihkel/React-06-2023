// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';
import Seaded from './pages/Seaded';

// tumesinine - tavaline tag
// roheline - võõras tag, mis tuleb importida
// helesinine - tagi omadused   className, src, alt, path, element
// oranž - jutumärkides väärtus

function App() {
  const [teema, uuendaTeema] = useState(localStorage.getItem("teema") || "hele");

  const uuendaTeemaTume = () => {
    uuendaTeema("tume");
    localStorage.setItem("teema", "tume");
  }

  const uuendaTeemaHele = () => {
    uuendaTeema("hele");
    localStorage.setItem("teema", "hele");
  }

  return (
    <div className={teema}>

      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      {teema === "hele" && <button onClick={uuendaTeemaTume}>Tume leht</button>}
      {teema === "tume" && <button onClick={uuendaTeemaHele}>Hele leht</button>}

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>
    </div>
  );
}

export default App;
