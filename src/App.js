import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()  // что приложение проинициализировалось и можно его отрисовывать
  }, [])

  const onClose = () => {
    tg.close()

  }

  return (
    <div className="App">
     work
     <br/>
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
