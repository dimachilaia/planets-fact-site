import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Planets from "./components/Planets";
import data from './data.json'
import { useState} from 'react';
import PlanetsHeader from "./components/PlanetsHeader";

function App() {
  const colors = ['#419EBB', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];
  const [barIsOpen, setBarIsOpen] = useState(false);
  

  return (
    <div>
    <Header colors={colors} data={data} barIsOpen={barIsOpen} setBarIsOpen={setBarIsOpen}/>
       <Routes>
          <Route path="planets-fact-site/:name" element={<Planets colors={colors} data={data} barIsOpen={barIsOpen} />}/>
          <Route path="/mars" element={<Planets colors={colors} data={data} barIsOpen={barIsOpen} global/>}/>
          <Route path="/mars" element={<PlanetsHeader colors={colors} data={data} />}/>
       </Routes>
    </div>
  );
}

export default App;
