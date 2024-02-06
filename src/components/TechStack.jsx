import React from 'react';

const TechStack = () => {
  return (
    <div className="flex justify-center  text-white flex-col items-center relative mb-10" id='tech'>
      <h2 className='bg-black text-white h-full font-mono font-bold text-3xl px-6 py-2 mb-4'>Tech Stack</h2>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center'>
        <TechIcon
          src="https://www.svgrepo.com/show/353735/firebase.svg"
          alt="Firebase"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="Node.js"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
          alt="MongoDB"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Native"
        />
        <TechIcon
          src="https://th.bing.com/th/id/OIP.dvZOtO5OujoVHmYA7Rn-qAHaHv?rs=1&pid=ImgDetMain"
          alt="Flask"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          alt="Python"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
          alt="C"
        />
        <TechIcon
          src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png"
          alt="Java"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="C++"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"
          alt="SQL"
        />
        <TechIcon
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="JavaScript"
        />
      </div>
    </div>
  );
};

const TechIcon = ({ src, alt }) => {
  return (
    <div className="flex text-black items-center flex-col bg-white rounded transition duration-300 hover:bg-gray-600 hover:shadow-md cursor-pointer">
      <img src={src} alt={alt} className="h-20 w-20 " />
      <span>{alt}</span>
    </div>
  );
};

export default TechStack;
