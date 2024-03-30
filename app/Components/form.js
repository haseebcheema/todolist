'use client'

import React, { useState } from 'react';

export default function Form() {
    
    const [task, setTask] = useState('');
    const handleChange = function(e){
        setTask(e.target.value);
    }
    const submitHandler = function(e){
        e.preventDefault();
        setTask('');
    }

  return (
    <form onSubmit={submitHandler}>
        <input className='bg-slate-100 p-4 rounded-full w-3/6' type="text" value={task} onChange={handleChange} placeholder='Add your task'/>
        <button className='bg-red-500 rounded-full p-4 -ml-10 w-1/6' type="button">ADD</button>
    </form>
  )
}
