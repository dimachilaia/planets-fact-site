import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Planets from "./components/Planets";
import data from './data.json'
import { useState} from 'react';

function App() {
  const colors = ['#419EBB', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];
  const [barIsOpen, setBarIsOpen] = useState(false);
  

  return (
    <div>
    <Header colors={colors} data={data} barIsOpen={barIsOpen} setBarIsOpen={setBarIsOpen}/>
       <Routes>
          <Route path="planets/:name" element={<Planets colors={colors} data={data} barIsOpen={barIsOpen} />}/>
          <Route path="/planets-fact-site" element={<Planets colors={colors} data={data} barIsOpen={barIsOpen} global/>}/>
       </Routes>
    </div>
  );
}

export default App;
