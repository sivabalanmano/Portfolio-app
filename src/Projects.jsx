import React from 'react';
import { FaGithub } from 'react-icons/fa';
import demo from  './images/Project-1.png';
import demon from  './images/Project-2.png';
import demone from './images/Project-3.png'
import { TbEyeShare } from "react-icons/tb";

const Projects = () => {
  return (
    <div className='bg-gray-500  mt-3'> <h1 className='items-center justify-center flex underline decoration-sky-400 font-bold p-2  lg:text-2xl'>Projects</h1>
        <div className='grid lg:grid-cols-3 items-center justify-center p-4 gap-4 lg:ml-32 md:ml-32 flex-col md:grid-cols-2'>
            <div className='items-center justify-center  bg-slate-200 w-60 shadow-lg overflow-hidden rounded-lg'>
              <div>
                <img src={demo} alt="" />
                <h1 className=' items-center justify-center flex p-2 font-bold underline decoration-sky-500'>Weather App</h1>
                <div className='flex items-center justify-center gap-5 p-5'>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white rounded-xl flex font-bold' href="https://github.com/sivabalanmano/Weather-App.git" target='_blank' rel="noreferrer"><FaGithub />Code</a>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white flex font-bold rounded-xl' href="https://weather-a-app.netlify.app/" target='_blank' rel="noreferrer"><TbEyeShare />Demo</a>
                </div>
                </div>
            </div>
            <div className='items-center justify-center  bg-slate-200 w-60 shadow-lg overflow-hidden rounded-lg'>
              <div>
                <img src={demone} alt="" />
                <h1 className=' items-center justify-center flex p-2 font-bold underline decoration-sky-500'>Sopping Cart</h1>
                <div className='flex items-center justify-center gap-5 p-5'>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white rounded-xl flex font-bold' href="https://github.com/sivabalanmano/react-shopping-cart.git" target='_blank' rel="noreferrer"><FaGithub />Code</a>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white flex font-bold rounded-xl' href="https://shoping-c-cart.netlify.app/" target='_blank' rel="noreferrer"><TbEyeShare />Demo</a>
                </div>
                </div>
            </div>
            <div className='items-center justify-center  bg-slate-200 w-60 shadow-lg overflow-hidden rounded-lg'>
              <div>
                <img src={demon} alt="" />
                <h1 className=' items-center justify-center flex p-2 font-bold underline decoration-sky-500'>Cake Shopping</h1>
                <div className='flex items-center justify-center gap-5 p-5'>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white rounded-xl flex font-bold' href="https://github.com/sivabalanmano/Fruit-Cake.git" target='_blank' rel="noreferrer"><FaGithub />Code</a>
                <a className='border-2 border-black p-1  hover:bg-black hover:text-white flex font-bold rounded-xl' href="https://fruite-cake-app.netlify.app/" target='_blank' rel="noreferrer"><TbEyeShare />Demo</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects