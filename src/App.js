import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

const tg = window.Telegram.WebApp;

function App() {
  
  useEffect(() => {
    tg.ready()  // что приложение проинициализировалось и можно его отрисовывать
  }, [])



  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
