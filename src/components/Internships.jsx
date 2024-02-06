import React from 'react';
import ambimed from '../assets/ambimed.jpg'
const Internships = () => {
    const internships = [
        {
          id: 1,
          company: 'Ambimed Healthcare',
          position: 'Software Developer Intern',
          duration: 'Autumn 2023',
          description: 'As a Software Developer Intern at Ambimed Healthcare, I contributed to the development of critical features for the company\'s web application. My primary focus was on enhancing user experience and optimizing performance. Notably, I spearheaded the development of a React Native mobile application that revolutionized ambulance tracking, route optimization, and distance calculation, significantly improving emergency response efficiency.',

          imageUrl: ambimed, // Example image URL
        },
        {
          id: 2,
          company: 'Upedian.',
          position: 'Python Web Developer',
          duration: 'Fall 2022',
          description: 'I created a multi-purpose tool that transcribes, summarizes, and converts handwriting, as well  a URL shortener.',
          imageUrl: 'https://media.licdn.com/dms/image/D4D22AQFssJyDxTEsPw/feedshare-shrink_2048_1536/0/1684757926253?e=1709769600&v=beta&t=Tw3y0vDcktxboJFpmZgo-DA073DxhGLbJ6g4r5e21v0', // Example image URL
        },
        // Add more internship data as needed
      ];
    
  return (
    <div className='relative flex flex-col justify-center items-center text-white p-2 mb-10' id='internships'>
      <h2 className='bg-black h-full font-mono font-bold text-3xl px-6 py-2 mb-4'>Internships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center mb-20">
        {internships.map(internship => (
          <div key={internship.id} className="max-w-md overflow-hidden rounded-lg shadow-lg bg-neutral-800">
            <img className="w-full" src={internship.imageUrl} alt={`${internship.company} Logo`} />
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl text-white">{internship.company}</h3>
              <p className="text-gray-300 text-base">{internship.position}</p>
              <p className="text-gray-300 text-base">{internship.duration}</p>
              <p className="text-gray-300 text-base">{internship.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
