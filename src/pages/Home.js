import React, { useContext}from 'react';
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
import { HouseContext } from '../components/HouseContext';
import Newhouse from '../components/Newhouse';

const Home = () => {

  return (
    <div className='min-h-[1800px]'>
     <Banner />
     <HouseList />
  </div>
  );
};

export default Home;
