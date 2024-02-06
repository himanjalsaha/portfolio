import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCode ,FaStar } from 'react-icons/fa';
const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/himanjalsaha/repos');
        setRepos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    
    <div className='relative flex flex-col justify-center items-center text-white mb-20 p-2' id='projects' >
      <h2 className='bg-black h-full font-mono font-bold text-3xl px-6 py-2 mb-4'>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {repos.map(repo => (
          <div key={repo.id} className="max-w-md overflow-hidden rounded-lg shadow-lg bg-neutral-800">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl text-white">{repo.name}</h3>
                <div className='flex items-center gap-2'>{repo.stargazers_count}<FaStar /></div>

                {repo.language && (
                  <div className="bg-gray-500 text-white px-2 py-1 rounded-full">
                    {repo.language}
                  </div>
                  
                )}
              </div>
              <p className="text-gray-300 text-base">{repo.description}</p>
            </div>
            <div className="px-6 pb-4">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  flex flex-row justify-center items-center text-center">
                View Code<FaCode className='mx-2'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
