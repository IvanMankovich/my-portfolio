import ghIcon from '../../static-assets/icons/iconmonstr-github-1.svg';
import liIcon from '../../static-assets/icons/iconmonstr-linkedin-3.svg';
import mailIcon from '../../static-assets/icons/icons8-gmail-logo.svg';

import { Link } from 'react-router-dom';

export interface IMobileMenu {
  isVisible: boolean;
  onClickHandler: (state: boolean) => void;
}

export const MobileMenu = ({ isVisible, onClickHandler }: IMobileMenu) => {
  if (isVisible) {
    return (
      <div className="fixed flex top-0 left-0 bottom-0 right-0 xs:hidden z-[2] xs:z-[-1] w-full h-full flex-col justify-start items-center bg-slate-50 border-r-2 border-gray-300 transition-all">
        <div className="h-[48px] md:h-auto w-full flex flex-col justify-center items-center"></div>

        <nav className="w-full mt-0 md:mt-4">
          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors"
              title="Home"
            >
              <p className="block px-2 font-bold">Home</p>
            </Link>
          </span>

          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/skills"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
              title="Skills"
            >
              <p className="block px-2 font-bold">Skills</p>
            </Link>
          </span>

          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/portfolio"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors mt-1"
              title="Portfolio"
            >
              <p className="block px-2 font-bold">Portfolio</p>
            </Link>
          </span>

          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/experience"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
              title="Experience"
            >
              <p className="block px-2 font-bold">Experience</p>
            </Link>
          </span>

          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/contact"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors mt-1"
              title="Contact"
            >
              <p className="block px-2 font-bold">Contact</p>
            </Link>
          </span>

          <span onClick={() => onClickHandler(false)}>
            <Link
              to="/cv"
              className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
              title="CV"
            >
              <p className="block px-2 font-bold">CV</p>
            </Link>
          </span>
        </nav>

        <div className="justify-self-end mt-auto mb-2">
          <a
            href="https://github.com/IvanMankovich"
            target="_blank"
            rel="noreferrer"
            className="block box-border w-12 h-12 mx-auto hover:bg-black/25 transition-colors rounded-md"
          >
            <img src={ghIcon} className="p-2" alt="github-icon" />
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
            target="_blank"
            rel="noreferrer"
            className="block box-border w-12 h-12 mx-auto hover:bg-black/25 transition-colors rounded-md mt-2"
          >
            <img src={mailIcon} className="p-2" alt="gmail-icon" />
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
