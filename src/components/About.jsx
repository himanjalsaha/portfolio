// components/About.js
import React from 'react';
import img from '../assets/blob.svg'
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/img2.png'
import blob from '../assets/blob_.svg'
import Projects from './Projects';
import svgbg from '../assets/svg_background.svg'
import Internships from './Internships';
import TechStack from './TechStack';
import Contact from './Contact';
import { FaGithub , FaLinkedin} from "react-icons/fa";
const About = () => {
  return (
    <div className='   h-[calc(100vh-62px)] overflow-auto    gap-10 bg-neutral-800' >
                      <img src={svgbg} alt=""  className='absolute inset-0 w-full h-full object-cover'/>

      <div className='lg:flex    h-full relative' id='home'>
      <div className=' flex-[0.49] flex items-center justify-center m-5'>
      <div className=' flex items-center justify-center my-20'>
          <img src={me} alt="" className='relative rounded-2xl w-1/2  ' />
        </div>
  
        </div>
        <div className=' flex-[0.6] flex justify-center items-center flex-col'>
          <div className=' flex  items-center justify-center '>
          <TypeAnimation 
      sequence={[
        'Iam  Himanjal',
        1000,
        // Same substring at the start will only be typed out once, initially
        'Iam a Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Iam a Designer',
        1000,
        'Iam a Learner',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block', color:'orange' , fontWeight:"bold" , fontFamily:'monospace' , padding:'5',   }}
      repeat={Infinity}
    />
          </div>
       
    <text className='text-white bg-neutral-600 p-2 shadow-lg rounded-xl text-4xl m-8'>
    "Transforming ideas into reality, one stack at a time. Let's build something incredible together."

    </text>
    <div className='text-white flex flex-row gap-2'>     
     <button href='https://github.com/himanjalsaha' target='_blank'><FaGithub  className='w-10 h-10'/> </button>
     <FaLinkedin className='w-10 h-10'/></div>

        </div>

      </div>
      
      <Projects className='relative' />

     
      <Internships/>
      <TechStack/>
      <Contact/>
      


               
               
       

    </div>
    
  );
}

export default About;
