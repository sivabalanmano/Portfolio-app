import React from 'react'
import { FaUser} from 'react-icons/fa'
import './App.css'

const Profile = () => {
  // const [nav,setNav]=useState(false)

  // function handleNavBar(){
  //   if(nav){
  //     setNav(false)
  //   }
  //   else{
  //     setNav(true)
  //   }
  // }
  return (
    <div className='shadow-lg bg-gray-400'>
    <nav className=" flex items-center justify-between h-20 max-w-6xl mx-auto">
        <div className="ml-5">
          <h1 className=" font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide  text-red-950">
           <div><button><FaUser /></button> Sivabalan </div>
          </h1>
        </div> 
        {/* <ul className=" list-none items-center space-x-6 text-white font-semibold hidden md:flex md:visible">
          <li className="btn">Profile</li>
          <li className="btn">About Me</li>
          <li className="btn">Skils</li>
          <li className="btn">Project</li>
          <li className="btn">Contact</li> 
       </ul>  */}
      
         
      {/* <li onClick={handleNavBar} className="list-none cursor-pointer m-5 sm:hidden">{
        nav === true ? <FaX />: <FaBars />
        }</li>
    </nav>
    <div className='justify-center items-center flex  '>
    {
      nav === true ?  <ul onClick={()=>(setNav(false))} className=" flex flex-col gap-2 py-2 list-none text-white font-semibold sm:hidden">
      <li className="btn">Profile</li>
      <li className="btn">About Me</li>
      <li className="btn">Skils</li>
      <li className="btn">Project</li>
      <li className="btn">Contact</li> 
   </ul> :null
    } </div> */}
    </nav>
  </div>
  )
}

export default Profile