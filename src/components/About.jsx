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
import { FcAbout } from "react-icons/fc";
import { FaGithub , FaLinkedin} from "react-icons/fa";
const About = () => {
  return (
    <div className='   h-[calc(100vh-62px)] overflow-auto    gap-10 bg-neutral-800' >
      <div>
      <img src={svgbg} alt=""  className='absolute inset-0 w-full h-full object-cover'/>

<div className='lg:flex    h-full relative gap-10  ' id='home'>
<div className=' flex-[0.49] flex items-center justify-center m-5'>
<div className=' flex items-center justify-center my-20'>
    <img src={me} alt="" className='relative rounded-2xl w-1/2  ' />
  </div>

  </div>
  <div className=' flex-[0.6] flex justify-center items-center flex-col '>
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
 
<div class=" p-2 m-2">
<div class="relative group text-white">
<div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
<div class="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
 <FcAbout className=' w-1/12 h-1/2 rotate-12'/>
  <div class="space-y-2">
    <p class="text-white text-lg">"Hi! I'm Himanjal Saha, a full-stack web developer passionate about crafting seamless user experiences. Let's build something extraordinary together!"</p>
  </div>
</div>
</div>
</div>
<div className='text-white flex flex-row gap-2'>     
<a href='https://github.com/himanjalsaha' target='_blank'><FaGithub  className='w-10 h-10'/> </a>
<a href='https://www.linkedin.com/in/himanjal-saha-263143247/' target='_blank'><FaLinkedin className='w-10 h-10'/></a></div>

  </div>

</div>

      </div>
                     
      <div className=''>
      <Projects  />
      </div>
     

     
      <Internships/>
      <TechStack/>
      <Contact/>
      


               
               
       

    </div>
    
  );
}

export default About;
