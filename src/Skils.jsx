import React from 'react'
import { FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";

const Skils = () => {
  return (
    <div ><h1 className='justify-center items-center flex mt-3  font-bold underline decoration-sky-400 lg:text-2xl'>Skils</h1>
    <div className='grid justify-center items-center lg:grid-cols-4 gap-4 lg:ml-10 md:grid-cols-2 md:ml-32 '>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:text-orange-600'><FaHtml5 /></div>
            <div className='font-bold'>HTML</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:text-blue-500'><FaCss3Alt /></div>
            <div className='font-bold'>Css</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:text-yellow-500'><FaJs /></div>
            <div className='font-bold'>JavaScript</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:text-orange-600'><FaGitAlt /></div>
            <div className='font-bold'>Git</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:text-blue-600'><FaReact /></div>
            <div className='font-bold'>React Js</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl '><FaGithub /></div>
            <div className='font-bold'>GitHub</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl  hover:hover:text-gray-600'><FaDatabase /></div>
            <div className='font-bold'>Oracle SQL</div>
        </div>
        <div className='bg-slate-200 h-60 w-52 shadow-lg rounded-lg justify-center items-center flex flex-col gap-2 mt-7 mb-5' >
            <div className=' text-9xl hover:hover:text-sky-300 '><RiTailwindCssFill /></div>
            <div className='font-bold'>TailWind</div>
        </div>
    </div>
    </div>
  )
}

export default Skils