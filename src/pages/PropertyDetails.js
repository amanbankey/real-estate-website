import React from 'react';
import {housesData} from '../data';
// import use params
import { useParams } from 'react-router-dom';

import {BiBed, BiBath, BiArea} from 'react-icons/bi';

import { NavLink } from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id
  const {id} = useParams();
  
  // get the house based on the id
  const house = housesData.find((house) => {
    return house.id === Number(id);
  }) 

  
    
  return (
  <section>
    <div className='container mx-auto min-h-[800px] mb-14 '>
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between '>
      <div className=''>
         <h2 className='text-2xl font-semibold '> { house.name} </h2>
         <h3 className='text-lg mb-4 '> {house.address} </h3>
      </div>
      <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm '>
         <div className='bg-violet-500 text-white px-2 py-2 hover:scale-110 transition-all font-semibold rounded-md text-center cursor-pointer'>{house.type}</div>
         <div className='text-md border border-black px-2 hover:scale-110 py-2 hover:text-white hover:bg-violet-500 cursor-pointer font-semibold rounded-md transition-all '>{house.country}</div>
      </div>
      <div className='text-3xl font-semibold text-violet-600 '> ${house.price} </div>
      {/* <div></div> */}
    </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row '>
        <div className='max-w-[768px] '>
           <div className='mb-8 '>
            <img src={house.imageLg}></img>
           </div>
           <div className='flex gap-x-6 text-violet-700 mb-6 '>
               <div className='flex gap-x-2 items-center'>
                  <BiBed  className='text-2xl '/>
                  <div className=''> {house.bedrooms} </div>
               </div>

               <div className='flex gap-x-2 items-center'>
                  <BiBath className='text-2xl ' />
                  <div className=''> {house.bathrooms} </div>
               </div>

               <div className='flex gap-x-2 items-center'>
                  <BiArea className='text-2xl ' />
                  <div className=''> {house.surface} </div>
               </div>
               <div className=''> 
                  {house.description}
               </div>
           </div>
           <div className='flex-1 bg-white w-full mb-8 border  border-gray-300 rounded-lg px-6 py-8'>
                <div className='flex items-center gap-x-4 mb-8'>
                   <div className='w-20 h-20 p-1 border border-gray-300 rounded-full '>
                     <img src={house.agent.image}></img>
                   </div>
                   <div className=''>
                     <div className=' font-bold text-lg '> {house.agent.name} </div>
                     <NavLink to='/' className='text-violet-700 text-sm '> View Listings</NavLink>
                   </div>
                </div>
           </div>
           {/* form  */}
           <form className='flex flex-col gap-y-4 '>
                <input className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm  ' type='text' placeholder='Name'></input>
                <input className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm  ' type='email' placeholder='Email'></input>
                <input className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm  ' type='text' placeholder='Phone'></input>
                <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-h h-36 text-sm text-gray-400 ' placeholder='Message' defaultValue='Hello, I am interested in [Modern apartment]'></textarea>
                <div className='flex gap-x-2 '>
                  <button className='bg-violet-700 text-white hover:bg-violet-800 rounded p-4 text-sm w-full transition '> Send message </button>
                  <button className=' border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-white hover:bg-violet-600 rounded p-4 text-sm w-full hover:scale-105 transition-all'> Call</button>
                </div>
           </form>
       </div>
      </div>
  </div>
  </section>)
};

export default PropertyDetails;
