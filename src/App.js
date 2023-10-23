import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestScreen from './pages/TestScreen';
import P404 from './pages/404';
import ToDo from './pages/Todo';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/lmaotest" element={<TestScreen/>}/>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="*" element={<P404/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
