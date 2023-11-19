// src/components/Project.tsx
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githubRepo: string;
  demoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image, githubRepo, demoUrl }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <img src={image} alt={title} className="max-h-64 max-w-full rounded-lg mb-4 object-cover" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in"
        >
          Repo
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;
