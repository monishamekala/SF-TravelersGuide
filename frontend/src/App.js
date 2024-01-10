import './assets/css/App.css';
import CustomNavbar from './components/CustomNavbar.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import CityMain from './pages/City/CityMain.js';
import CountryMain from './pages/Country/CountryMain.js';
import AttractionMain from'./pages/Attraction/AttractionMain.js';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar></CustomNavbar>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route path='/city' Component={CityMain}></Route>
          <Route path='/country' Component={CountryMain}></Route>
          <Route path='/attraction' Component={AttractionMain}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
