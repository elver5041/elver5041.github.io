import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestScreen from './pages/TestScreen';
import P404 from './pages/404';
import ToDo from './pages/Todo';
import TimeTable from './pages/TimeTable';

function App() {
  return (
    <div className='App'>
      <Router basename="/repo-name">
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/lmaotest" element={<TestScreen/>}/>
          <Route path="/todo" element={<ToDo/>}/>
          <Route path="/avaliability" element={<TimeTable/>}/>
          <Route path="*" element={<P404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
