import './App.css';
import TestScreen from './pages/TestScreen';
import P404 from './pages/404';
import ToDo from './pages/Todo';
import TimeTable from './pages/TimeTable';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';

function App() {
  const screens = ["main","lmaotest", "todo", "avaliability"]
  const  [search, setSearch]  = useState("lmaotest")
  const [comp, setComp] = useState(<></>)
  useEffect(()=>{
    switch (search) {
      case "main":
        setComp(<></>)
        break;
      case "lmaotest":
        setComp(<TestScreen/>)
        break;
      case "todo":
        setComp(<ToDo/>)
        break;
      case "avaliability":
        setComp(<TimeTable/>)
        break;
      default:
        setComp(<P404/>)
    }
  },[search])
  
  return (
    <div className='App'>
      <Header changer={setSearch} allscreens={screens}/>
      {comp}
    </div>
  );
}

export default App;
