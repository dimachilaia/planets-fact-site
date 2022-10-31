import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Planets from "./components/Planets";
import data from './data.json'

function App() {
  const colors = ['#419EBB', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];


  return (
      <Routes>
          <Route path="/" element={<Header colors={colors}/>}>
          <Route path="/:name" element={<Planets colors={colors} data={data}/>}/>
          </Route>
      </Routes>
  );
}

export default App;
