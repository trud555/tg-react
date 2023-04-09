import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



function App() {
  
  const {tg,  onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()  // что приложение проинициализировалось и можно его отрисовывать
  }, [])



  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Главная кнопка</button>
    </div>
  );
}

export default App;
