import './App.css';
import TestScreen from './pages/TestScreen';
import P404 from './pages/404';
import ToDo from './pages/Todo';
import TimeTable from './pages/TimeTable';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';

export const screens = {
  Main: ["main", <></>],
  LmaoTest: ["lmaotest", <TestScreen/>],
  Todo: ["todo", <ToDo/>],
  Avaliablilty: ["avaliability", <TimeTable/>]
}

function App() {
  const  [search, setSearch]  = useState(screens.LmaoTest[0])
  const [comp, setComp] = useState(<></>)
  useEffect(()=>{
    let set = false
    for (let screen in screens) {
      if(search===screens[screen][0]){
        setComp(screens[screen][1])
        set=true
      }
    }
    if(!set){
      setComp(<P404/>)
    }
  },[search])
  
  return (
    <div className='App'>
      <Header changer={setSearch} />
      {comp}
    </div>
  );
}

export default App;
