import AboutMe from './AboutMe';
import GetInTouch from './GetInTouch';
import MinContent from './MinContent';
import NavBar from './NavBar'
import Projects from './Projects';
import Skils from './Skils';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el, { scale: 0 }, {
            scale: 1, duration: 1, scrollTrigger: {
                trigger: el
            }
        })
    }, [])
  return (
   <div>
    <NavBar />
    <MinContent />
    <AboutMe ref={ref}/>
    <Skils />
    <Projects />
    <GetInTouch />
   </div>
  );
}

export default App;
