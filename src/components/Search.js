import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDetails from '../pages/PropertyDetails';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown'
import { RiSearch2Line } from "react-icons/ri";

import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick , setTimeout} = useContext(HouseContext);
  // const {houses} = useContext(HouseContext);

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1  bg-white lg:bg-transparent  rounded-lg '> 
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={() => {handleClick() }} 
       className='bg-violet-700 hover:bg-violet-800  w-full lg:max-w-[162px] mt-2  h-12 rounded flex justify-center items-center text-white  text-lg '>
         <RiSearch2Line className=''/>
      </button>
  </div>
  )
};

export default Search;
