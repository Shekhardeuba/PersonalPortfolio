import React from "react";

const Certifications = () => {
  return (
    <div id='certifications' className="bg-gray-900 font-deca font-semibold text-4xl p-3">
      <p className="flex justify-center items-center mt-12 mb-12">
        <span className="text-white">Certifica</span>
        <span className=" text-yellow-500">tions</span>
      </p>
      <div className="flex flex-col items-center space-y-6 text-lg text-white">
        <div className="bg-black rounded-lg p-4 w-96">
          <ul className="list-disc ml-6">
            <li>Microsoft certified Azure AI fundamentals</li>
            <li>Employability Advantage – Business Analyst Bootcamp</li>
            <li>Microsoft certified Power platform fundamentals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
