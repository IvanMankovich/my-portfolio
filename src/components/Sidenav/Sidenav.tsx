import { Link } from 'react-router-dom';
import homeIcon from '../../static-assets/icons/home_FILL0_wght400_GRAD0_opsz48.svg';
import workIcon from '../../static-assets/icons/work_FILL0_wght400_GRAD0_opsz48.svg';
import contactIcon from '../../static-assets/icons/mail_FILL0_wght400_GRAD0_opsz48.svg';
import ghIcon from '../../static-assets/icons/iconmonstr-github-1.svg';
import liIcon from '../../static-assets/icons/iconmonstr-linkedin-3.svg';
import mailIcon from '../../static-assets/icons/icons8-gmail-logo.svg';
import cvIcon from '../../static-assets/icons/file_present_FILL0_wght400_GRAD0_opsz48.svg';
import skillsIcon from '../../static-assets/icons/checklist_FILL0_wght400_GRAD0_opsz48.svg';
import experienceIcon from '../../static-assets/icons/work_history_FILL0_wght400_GRAD0_opsz48.svg';

import photo from '../../static-assets/images/photo.png';

export const Sidenav = () => {
  return (
    <aside className="xs:print:hidden hidden fixed top-0 left:0 xs:flex xs:w-[48px] md:w-[200px] md:max-w-[200px] md:min-w-[200px] xl:hidden h-full flex-col justify-start items-center bg-slate-50 border-r-2 border-gray-300 transition-all z-[1]">
      <div className="h-[48px] md:h-auto w-full flex flex-col justify-center items-center">
        <img
          src={photo}
          alt="Ivan Mankovich web developer"
          className="rounded-full hidden md:block xl:hidden mt-2 mx-auto w-[180px] h-[180px] shadow-[-2px_-2px_0_2px_rgba(192,38,211,1),2px_2px_0_2px_rgba(74,222,128,1)]"
        />
        <p className="hidden md:block xl:hidden mt-2 text-center">
          <strong>Ivan Mankovich</strong>
          <br />
          js dev
        </p>
      </div>

      <nav className="w-full mt-0 md:mt-4">
        <Link
          to="/"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors"
          title="Home"
        >
          <img src={homeIcon} className="w-6 h-6 md:hidden mx-auto" alt="home icon" aria-label="home icon" />
          <p className="hidden md:block px-2 font-bold">Home</p>
        </Link>

        <Link
          to="/skills"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
          title="Skills"
        >
          <img src={skillsIcon} className="w-6 h-6 md:hidden mx-auto" alt="work icon" aria-label="work icon" />
          <p className="hidden md:block px-2 font-bold">Skills</p>
        </Link>

        <Link
          to="/portfolio"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors mt-1"
          title="Portfolio"
        >
          <img src={workIcon} className="w-6 h-6 md:hidden mx-auto" alt="info icon" aria-label="info icon" />
          <p className="hidden md:block px-2 font-bold">Portfolio</p>
        </Link>

        <Link
          to="/experience"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
          title="Experience"
        >
          <img
            src={experienceIcon}
            className="w-6 h-6 md:hidden mx-auto"
            alt="contact icon"
            aria-label="contact icon"
          />
          <p className="hidden md:block px-2 font-bold">Experience</p>
        </Link>

        <Link
          to="/contact"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-fuchsia-600 transition-colors mt-1"
          title="Contact"
        >
          <img src={contactIcon} className="w-6 h-6 md:hidden mx-auto" alt="contact icon" aria-label="contact icon" />
          <p className="hidden md:block px-2 font-bold">Contact</p>
        </Link>

        <Link
          to="/cv"
          className="block py-2 w-full hover:bg-black/25 xs:border-r-2 md:border-r-4 border-transparent hover:border-green-400 transition-colors mt-1"
          title="CV"
        >
          <img src={cvIcon} className="w-6 h-6 md:hidden mx-auto" alt="contact icon" aria-label="contact icon" />
          <p className="hidden md:block px-2 font-bold">CV</p>
        </Link>
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
    </aside>
  );
};
