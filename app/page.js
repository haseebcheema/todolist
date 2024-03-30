import React from 'react';
import Form from './Components/form';

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen bg-blue-600 flex justify-center items-center'>
        <div className='bg-white w-6/12 h-5/6 border-0 rounded-lg p-10'>
          <h1 className='w-fit text-2xl font-bold mb-2'>To-Do List</h1>
          <Form/>
        </div>
      </div>
    </>
  )
}
