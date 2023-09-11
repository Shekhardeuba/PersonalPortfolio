import React from 'react';

const ProjectsCards = () => {
  const handle = () => {
    // Define the URL you want to navigate to
    const link = "https://shekhardeuba.github.io/pokemon/"; 
  
    // Use the window.location object to navigate to the link
    window.location.href = link;
  };
  return (
    <div className='flex ml-40'>
            <div className="w-full h-full p-8 bg-gray-900 rounded-lg overflow-hidden flex flex-col justify-start items-start space-y-8">
      <div className="flex flex-col justify-start items-center rounded-md p-2 bg-black">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-8.805 absolute left-0 top-2.5 bg-yellow-400"></div>
        </div>
        <div className="flex flex-col justify-start items-center space-y-16 mb-5">
          <div className="text-center text-white text-2xl font-semibold leading-10 font-sans">
            Pokemondex
          </div>
          <div className="w-72 text-center text-gray-500 text-base font-normal leading-7 font-sans ">
          "PokémonDex is a web app that seamlessly integrates APIs to provide up-to-date Pokémon data. Utilizing React's useState and useEffect hooks, it creates dynamic, responsive content." <br />
        <button className='text-white' onClick={handle}>  Link </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-full p-8 bg-gray-900 rounded-lg overflow-hidden flex justify-between items-center ">
      <div className="flex flex-col justify-between items-center rounded-lg p-2 bg-black">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-8.805 absolute left-0 top-2.5 bg-yellow-400"></div>
        </div>
        <div className="flex flex-col justify-start items-center space-y-16 mb-5">
          <div className="text-center text-white text-2xl font-semibold leading-10 font-sans">
          Car App
          </div>
          <div className="w-72 text-center text-gray-500 text-base font-normal leading-7 font-sans">
          "Car App: Utilizes React hooks for dynamic UI, FlatList ensures smooth scrolling, while a well-structured navigation system with routes simplifies car listing exploration and management."          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-full p-8 bg-gray-900 rounded-lg overflow-hidden flex flex-col justify-start items-start space-y-8">
      <div className="flex flex-col justify-start items-center rounded-md p-2 bg-black">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-8.805 absolute left-0 top-2.5 bg-yellow-400"></div>
        </div>
        <div className="flex flex-col justify-start items-center space-y-16 mb-5">
          <div className="text-center text-white text-2xl font-semibold leading-10 font-sans">
            BuySasto
          </div>
          <div className="w-72 text-center text-gray-500 text-base font-normal leading-7 font-sans">
"Buysasto E-commerce App: Employs Redux for state management, seamlessly integrates APIs, and incorporates web views, supported by a RESTful Node.js backend for a feature-rich shopping experience."          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectsCards;
