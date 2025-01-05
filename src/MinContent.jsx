import React from 'react'
import MyImages from './images/vector-flat-illustration-software-developer-cyber-program-security_776789-211.avif'
import { FaGithub} from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";
import Resume from './images/Resume.pdf';

const MinContent = ({ref}) => {
  return (
    <div ref={ref}>
      <div className='items-center justify-center flex py-2 font-bold text-xl cursor-pointer sm:text-2xl underline decoration-sky-500'>Profile</div>
        <div className='grid-cols-2 gap-2 items-center justify-between w-[100%] mx-auto lg:flex' >
            <div className='justify-center items-center flex' >
              <div className='font-bold mt-5  text-xl sm:text-2xl cursor-pointer  md:text-3xl lg:ml-28 md:ml-0'>  Sivabalan <br />
                Juniour Softwear Developer 
                 <div className='mt-3 flex gap-6'>
                  <a href="https://github.com/sivabalanmano" target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a className='flex gap-2  border-2 border-black p-1 font-semibold rounded-lg decoration-none hover:bg-gray-600 hover:text-white text-sm' href={Resume} target="_blank" rel="noreferrer" download="resume"><FaDownload /> Resume</a>
                </div> 
                  </div>
            </div>
            <div className='justify-center  items-center mt-20 flex-col gap-3 mb-8 lg:mr-28 md:mr-3'>
           <img className='rounded-lg lg:h-96 lg:w-96 overflow-hidden shadow-md md:ml-32' src={MyImages} alt="" />
           </div>
        </div>

        
    </div>
  )
}

export default MinContent