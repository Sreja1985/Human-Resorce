import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NewPerson from './Pages/NewPerson';
import EditPerson from './Pages/EditPerson';
import ReadPerson from './Pages/ReadPerson';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/new-person' exact element={<NewPerson />} />
        <Route path='/edit-person/:id' exact element={<EditPerson />} />
        <Route path='/read-person/:id' exact element={<ReadPerson />} />
      </Routes>
      
    </main>
  );
}

export default App;
