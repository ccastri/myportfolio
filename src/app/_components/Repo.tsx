'use client'
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import StarOutlinedIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';
// Lo voy a necesitar mas tarde
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
    <div className="flex flex-col pt-20 bg-slate-800 py-4 text-[#f1f1f1] items-center space-y-2 overflow-x-hidden w-screen h-full ">
      <h2 className="mx-8 text-3xl font-bold relative z-30" >GitHub: repos preferidos aportes Open Source, etc...<span className="h-12 mr-4 mt-4 w-3 absolute z-40 bg-green-600"/></h2>
      <div 
      className=' h-screen   sm:h-full w-screen grid grid-cols-2  sm:gap-4    overflow-y-scroll  sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 items-center justify-center'
      >
        {projects.map((project) => (
          <div 
          className=" m-4 border-4 h-full transition-all transform hover:blur-sm blur-0 shadow-4 shadow-slate-200 hover:shadow-xl hover:scale-105 hover:ease-in-out  duration-200 flex flex-col  rounded-md "
          key={project.id}>
            <h2 className='w-full top-0'>
              {project.name}
              </h2>
              <div className="flex items-end justify-end space-x-4 bottom-2 h-full w-full right-2 overflow-x-hidden" >
            <p><StarOutlinedIcon/> {project.stargazers_count}</p>
            <div className="flex items-end justify-end"><Image src={"https://www.svgrepo.com/show/327279/git-branch.svg"} alt="" width={25} height={25}/> <>{project.forks_count}</></div>
            <p><RemoveRedEyeIcon/>: {project.watchers_count}</p>
              </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Repo;
