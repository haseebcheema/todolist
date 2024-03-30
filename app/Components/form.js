'use client'

import React, { useState } from 'react';

export default function Form() {
    
    const [task, setTask] = useState('');
    const [tasksList, setTaskList] = useState([]);

    const handleChange = function(e){
        setTask(e.target.value);
    }
    const submitHandler = function(e){
        e.preventDefault();
        setTaskList([...tasksList, task]);
        setTask('');
    }
    const deleteHandler = function(i){
      let copyTasks = [...tasksList];
      copyTasks.splice(i, 1);
      setTaskList(copyTasks);
    }

    let renderTasks = 'You are free today!'
    if(tasksList.length>0){
        renderTasks = tasksList.map((t, index)=>{
        return(
          <ul>
            <li className='ml-1 flex justify-between w-11/12 '>
              <h1 className='text-2xl mb-2'>{t}</h1>
              <button className='text-white p-4 flex justify-center items-center rounded-full w-6 h-6 bg-indigo-500 hover:bg-indigo-600' type="button" onClick={()=>{
                  deleteHandler(index);
                }}>X</button>
            </li>
          </ul>
        )
      });
    }

  return (
    <>
      <form onSubmit={submitHandler} className='mb-4'>
        <input className='bg-slate-100 p-4 rounded-full w-5/6' type="text" value={task} onChange={handleChange} placeholder='Add your task'/>
        <button className='bg-indigo-500 rounded-full p-4 -ml-10 w-1/4 text-white font-semibold hover:bg-indigo-600' type="button">ADD</button>
      </form>
      {renderTasks}
    </>
  )
}
