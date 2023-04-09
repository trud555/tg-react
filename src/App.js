import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import {Route, Routes} from 'react-router-dom'
import Productlist from './components/ProductList/Productlist';
import Form from './components/Form/Form';



function App() {
  
  const {tg,  onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()  // что приложение проинициализировалось и можно его отрисовывать
  }, [])



  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route index element={<Productlist/>} />
          <Route path={'form'} element={<Form/>} />
      </Routes>



      {/* <button onClick={onToggleButton}>Главная кнопка</button> */}
    </div>
  );
}

export default App;
