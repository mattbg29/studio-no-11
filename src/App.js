import './App.css';
import Landing from './components/LoadingPage';
import { useEffect, useState } from 'react';
import MainPage from './components/MainPage';



function App() {
  const [loadScreen, setLoadScreen] = useState(false)
  const [screenGone, setScreenGone] = useState(false)

  useEffect(() => {
    setLoadScreen(true)
    const time1 = setTimeout(() => setLoadScreen(false), 2500)
    const time2 = setTimeout(() => setScreenGone(true), 5000)
    return () => {
      clearTimeout(time1)
      clearTimeout(time2)
    }
  }, [])

  return (
    <div style={{fontFamily: 'Europa', color: 'hsl(0, 0%, 40%)', fontSize: '.8em', backgroundColor: 'white'}}>
      {!screenGone ? <Landing showIt={loadScreen} /> : <MainPage />}
    </div>
  );
}

export default App;

