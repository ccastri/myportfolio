'use client'
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

// Define the Project interface here or import it from the appropriate location
interface Project {
  id: number;
  name: string;
  // Add other properties as needed
}

export const getGitHubRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch repositories');
  }
};

const Repo: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const username = 'ccastri'; // You can move this to a configuration or props
    getGitHubRepos(username)
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col pt-20 bg-slate-800 py-16 text-[#f1f1f1] items-center space-y-2 h-screen ">
      <h2 className="text-3xl font-bold">GitHub, mis repos preferidos y contribuciones OpenSource</h2>
      <div 
      className=' h-full w-screen grid grid-cols-2 gap-4   overflow-y-scroll  sm:grid-cols-3 lg:grid-cols-4 items-center justify-center'
      >
        {projects.map((project) => (
          <div 
          className=" mx-auto border-4 h-full transition-all transform blur-sm hover:blur-0 shadow-4 shadow-slate-200 hover:shadow-xl hover:scale-105 hover:ease-in-out  duration-200 flex px-24 py-32 rounded-md w-full"
          key={project.id}>
            <h2>
              {project.name}
              </h2>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Repo;
