import React from "react";
import image from "../../assets/bgblack1.png"
import Typewriter from "typewriter-effect";


const Banner = () => {
    return (
        <div className="flex justify-between bg-black font-lexend">
            <div className=" mt-40  ml-32">
                <h1 className="text-yellow-500 text-xl">
                    Hello Welcome
                </h1>
                <div className="mt-4 text-4xl text-gray-200 font-semibold h-[64px] break-words">
            <Typewriter 
    onInit={(typewriter) => {
        typewriter
            .typeString(" I am Shekhar Deuba.")
            .pauseFor(1500)
            .deleteChars(15)
            .typeString(" a Web Developer.")
            .pauseFor(1500)
            .deleteChars(17)
            .typeString(" a Mobile Developer.")
            .start();
    }}
/>

</div>
<div className="text-gray-600 text-base font-deca font-normal leading-[1.75] break-words">
          <p>
            "Junior React/Node.js developer passionate about crafting
            <br />
            engaging apps/websites. Eager to learn, collaborate,
            <br />
            and contribute to innovative projects."
          </p>
        </div>


            </div>
            <div className="mt-32 mb-12 mr-60">
            <img src={image} width="450" height="450"/>
            </div>

        </div>
    )
}

export default Banner;