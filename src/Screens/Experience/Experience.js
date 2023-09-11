import React from "react";
import image from "../../assets/bgblack1.png";
import Typewriter from "typewriter-effect";

const Experience = () => {
  return (
    <div id='aboutme' className="bg-black font-lexend font-deca font-semibold text-4xl p-3">

      <p className="flex justify-center items-center mt-12 mb-12">
        <span className="text-white">Experien</span>
        <span className="text-yellow-500">ce</span>
      </p>

      <ul className="flex flex-col justify-center items-center space-y-16 mb-5">
        <li className="text-center text-white text-2xl font-semibold leading-10 font-sans">
          Internship
        </li>
        <li className="w-72 text-center text-gray-500 text-base font-normal leading-7 font-sans">
          <ul>
            <li>Duration: February to April (3 months)</li>
            <li>Company: Outlines Research & Development Company</li>
            <li>Location: Chakupath, Lalitpur</li>
            <li>Focus: React and Node.js Development</li>
          </ul>
        </li>
      </ul>

      <ul className="flex flex-col justify-start items-center space-y-16 mb-5">
        <li className="text-center text-white text-2xl font-semibold leading-10 font-sans">
          Junior Developer
        </li>
        <li className="w-72 text-center text-gray-500 text-base font-normal leading-7 font-sans">
          <ul>
            <li>Duration: April to Present </li>
            <li>Company: Outlines Research & Development Company</li>
            <li>Location: Chakupath, Lalitpur</li>
            <li>Focus: React and Node.js Development</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
