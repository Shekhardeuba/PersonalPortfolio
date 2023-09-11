import React from "react";
import ProjectsCards from "../../Components/ProjectsCards/ProjectsCards";

const Projects = () => {
    return (
        <div id='aboutme' className="bg-gray-900 font-deca font-semibold text-4xl p-3">
            <p className="flex justify-center items-center mt-12 mb-12">
                <span className="text-white">Projec</span>
                <span className=" text-yellow-500">ts</span> {/* Adjust the ml-2 for desired spacing */}
            </p>
            <ProjectsCards />
        </div>
    )
}

export default Projects;
