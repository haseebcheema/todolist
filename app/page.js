import React from 'react';
import Form from './Components/form';

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen bg-gradient-to-r from-indigo-800 flex justify-start items-center'>
        <div className='bg-white w-1/3 h-4/5 border-0 rounded-lg p-10 ml-28 overflow-auto'>
          <h1 className='w-fit text-2xl font-bold mb-4'>To-Do List</h1>
          <Form/>
        </div>
      </div>
    </>
  )
}
