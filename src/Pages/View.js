import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export const View = () => {
  return (
    <div>
      <div className='flex'>
        <div className='basis-[14%]'>
          <Sidebar />
        </div>
        <div className='flex flex-col basis-[86%]'>
          <div className='w-full grid grid-cols-4  px-20 pt-20'>
            
              <div className='flex-col text-center'>
                <p className='text-lg font-bold'>Full Name</p>
                <p>Mikee Vargas</p>
              </div>
            
           
              <div className='flex-col text-center'>
                <p className='text-lg font-bold'>Phone No.</p>
                <p>123-456-7890</p>
              </div>
           
            
              <div className='flex-col text-center'>
                <p className='text-lg font-bold'>Email</p>
                <p>mikee@example.com</p>
              </div>
            
            
              <div className='flex-col text-center'>
                <p className='text-lg font-bold'>Address</p>
                <p>Blk32 Lot-6 Ph-1b Village of the Sorcerrer</p>
              </div>
            
            </div>
            <div className='w-full grid grid-cols-4 px-20 pt-5 '>
                <div className='flex-col text-center'>
                    <p className='text-lg font-bold'>Marital Status</p>
                    <p>Taken</p>
                </div>
            </div> 
        </div>
      </div>
    </div>
  );
};
