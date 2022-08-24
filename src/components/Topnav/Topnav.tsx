import React from 'react';
import { Link } from 'react-router-dom';
import ghIcon from '../../static-assets/icons/iconmonstr-github-1.svg';
import liIcon from '../../static-assets/icons/iconmonstr-linkedin-3.svg';
import mailIcon from '../../static-assets/icons/icons8-gmail-logo.svg';
import personIcon from '../../static-assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';

import './Topnav.scss';

export const Topnav = () => {
  return (
    <nav className="hidden xl:flex h-[48px] w-full flex-row justify-center items-center">
      <Link
        to="/"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="Home"
      >
        <p className="hidden sm:block m-auto font-bold">Home</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-green-400 transition-width"></div>
      </Link>

      <Link
        to="/skills"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="Skills"
      >
        <p className="hidden sm:block px-2 font-bold">Skills</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-fuchsia-600 transition-width"></div>
      </Link>

      <Link
        to="/portfolio"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="Portfolio"
      >
        <p className="hidden sm:block px-2 font-bold">Portfolio</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-green-400 transition-width"></div>
      </Link>

      <Link
        to="/experience"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="Experience"
      >
        <p className="hidden sm:block px-2 font-bold">Experience</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-fuchsia-600 transition-width"></div>
      </Link>

      <Link
        to="/contact"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="Contact"
      >
        <p className="hidden sm:block px-2 font-bold">Contact</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-green-400 transition-width"></div>
      </Link>

      <Link
        to="/cv"
        className="flex justify-center items-center h-[40px] py-1 border-b-2 border-solid border-transparent w-full my-auto relative topnav-link"
        title="CV"
      >
        <p className="hidden sm:block px-2 font-bold">CV</p>
        <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-fuchsia-600 transition-width"></div>
      </Link>

      <div className="flex justify-center items-center h-[40px] py-1 border-b-2 mr-2 border-solid border-transparent w-auto my-auto relative topnav-link dropdown">
        <button className="dropbtn rounded-full my-2 w-[48px] h-[48px]">
          <img src={personIcon} className="block p-2" alt="home-icon" />
        </button>
        <div className="hidden absolute top-full w-[56px] z-[1] bg-slate-200 shadow-[4px_0_4px_4px_rgba(226,232,240,1),-4px_0_4px_2px_rgba(226,232,240,1),0px_4px_4px_2px_rgba(226,232,240,1)] dropdown-content">
          <a
            href="https://github.com/IvanMankovich"
            target="_blank"
            rel="noreferrer"
            className="block w-[48px] h-[48px] mx-auto hover:bg-black/25 transition-colors rounded-md"
          >
            <img src={ghIcon} className="block w-[48px] h-[48px] p-2" alt="github-icon" />
          </a>

          <a
            href="https://linkedin.com/in/ivan-mankovich/"
            target="_blank"
            rel="noreferrer"
            className="block box-border w-12 h-12 mx-auto hover:bg-black/25 transition-colors rounded-md mt-2"
          >
            <img src={liIcon} className="p-2" alt="linkedin-icon" />
          </a>

          <a
            href="mailto:mankovich.ivan@gmail.com"
            className="block box-border w-12 h-12 mx-auto hover:bg-black/25 transition-colors rounded-md mt-2"
          >
            <img src={mailIcon} className="p-2" alt="gmail-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};
