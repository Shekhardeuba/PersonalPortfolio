// import React, { useState } from "react";
// import Logo from "../../assets/LOGO.png"


// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     }


//     return(
//         <>
//             <div className="flex justify-between bg-gray-900 h-20 font-semibold items-center fixed top-0 left-0 w-full ">
//                 <div className="text-white flex items-center gap-6">
//                     <img src={Logo} width="80" height="80"/>
//                     <p>
//                         PORTFOLIO
//                     </p>
//                     <div className="md:hidden">
//                         <button className="text-green-50"
//                         onClick={toggleMenu}>
//                         ☰
//                         </button>
//                     </div>
//                 </div>
//                 <div className={`text-green-50 flex gap-9 mr-5 ${menuOpen ? 'block' : 'hidden'}` }>
//                     <a href="#">
//                     <p>
//                         About me
//                     </p>
//                     </a>
//                     <a href="#">
//                     <p>
//                         Projects
//                     </p>
//                     </a>
//                     <a href="#">
//                     <p>
//                         Experience
//                     </p>
//                     </a>
//                     <a href="#">
//                     <p>
//                         Skills
//                     </p>
//                     </a>
//                     <a href="#">
//                     <p>
//                         Contacts
//                     </p>
//                     </a>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Header ;




























import React, { useState } from "react";
import Logo from "../../assets/LOGO.png";

const Header = () => {
    const Links = ['HOME',  'PROJECTS', 'EXPERIENCE','CONTACT'];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-gray-900 font-semibold flex justify-between items-center h-20 p-4 font-lexend ">
            <img src={Logo} width="80" height="80" alt="Logo" />
            <p className="text-yellow-50 font-mono-bold ml-4 mr-auto">
                PORTFOLIO
            </p>
            <div className="md:hidden">
                <button
                    className="text-white"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>
            <ul className={`md:flex gap-6 text-white font-semibold ${menuOpen ? 'block' : 'hidden'}`}>
                {Links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
