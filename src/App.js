import React from 'react';
// import House from './components/House';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Header from './components/Header';
import HouseList from './components/HouseList';
import Newhouse from './components/Newhouse';

const App = () => {
  return <div className='max-w-[1150px] mx-auto bg-white '>
           <Header/>
           <Routes >
              <Route path='/' element={<Home/>}></Route>
              <Route path='/property/:id' element={<PropertyDetails/>}> </Route> 

           </Routes>
         
          <Footer/>
    </div>;
};

export default App;
