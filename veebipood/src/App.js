// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';
import Seaded from './pages/Seaded';
import Hinnad from './pages/Hinnad';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';

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

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="halda" element={ <HaldaTooted /> } />
        <Route path="muuda/:jrknr" element={ <MuudaToode /> } />
        <Route path="toode/:index" element={ <YksikToode /> } />
      </Routes>
    </div>
  );
}

export default App;
