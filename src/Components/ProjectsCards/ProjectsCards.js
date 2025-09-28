import React from 'react';

const ProjectsCards = () => {
  const handle = () => window.location.href = "https://shekhardeuba.github.io/pokemon/";
  const handleNetflix = () => window.location.href = "https://netflix-xi-steel-64.vercel.app/";
  const handleKoreanRestaurant = () => window.location.href = "https://bite-of-seoul-frontend-r1mb0qorn-shekhardeubas-projects.vercel.app/";

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-10">
      {/* ✅ MAIN GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* ✅ CARD COMPONENT */}
        <div className="w-80 p-8 bg-gray-900 rounded-lg flex flex-col items-center space-y-6 shadow-lg">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-8.5 absolute left-0 top-2.5 bg-yellow-400"></div>
          </div>
          <div className="text-white text-2xl font-semibold">Pokemondex</div>
          <div className="text-center text-gray-400 text-base leading-7">
            PokémonDex is a web app that seamlessly integrates APIs to provide up-to-date Pokémon data.
            Utilizing React's useState and useEffect hooks, it creates dynamic, responsive content.
          </div>
          <button className="text-white underline" onClick={handle}>Link</button>
        </div>

        <div className="w-80 p-8 bg-gray-900 rounded-lg flex flex-col items-center space-y-6 shadow-lg">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-8.5 absolute left-0 top-2.5 bg-yellow-400"></div>
          </div>
          <div className="text-white text-2xl font-semibold">Car App</div>
          <div className="text-center text-gray-400 text-base leading-7">
            A React-powered Car App featuring flash cards with dynamic car details, FlatList scrolling, 
            and intuitive navigation for seamless exploration. The app leverages responsive design 
            to ensure a consistent experience across devices.
          </div>
        </div>

        <div className="w-80 p-8 bg-gray-900 rounded-lg flex flex-col items-center space-y-6 shadow-lg">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-8.5 absolute left-0 top-2.5 bg-yellow-400"></div>
          </div>
          <div className="text-white text-2xl font-semibold">Netflix Clone</div>
          <div className="text-center text-gray-400 text-base leading-7">
            A React-powered Netflix Clone featuring Redux-based state management, seamless API integration,
            and responsive web views for a smooth streaming-like experience. The app leverages a RESTful Node.js
            backend to deliver dynamic content and ensure scalability across devices.
          </div>
          <button className="text-white underline" onClick={handleNetflix}>Link</button>
        </div>

        <div className="w-80 p-8 bg-gray-900 rounded-lg flex flex-col items-center space-y-6 shadow-lg">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-8.5 absolute left-0 top-2.5 bg-yellow-400"></div>
          </div>
          <div className="text-white text-2xl font-semibold">Korean Restaurant & BBQ</div>
          <div className="text-center text-gray-400 text-base leading-7">
            A Next.js-powered restaurant website featuring dynamic menus, reservation functionality, 
            and customer reviews for an engaging dining experience. The app utilizes Supabase as the 
            backend and is fully responsive to provide a consistent experience across devices.
          </div>
          <button className="text-white underline" onClick={handleKoreanRestaurant}>Link</button>
        </div>

      </div>
    </div>
  );
};

export default ProjectsCards;
