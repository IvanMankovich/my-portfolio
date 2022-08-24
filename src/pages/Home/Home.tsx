import photo from '../../static-assets/images/photo.png';
import { Link } from 'react-router-dom';

export const Home = () => {
  document.title = 'Homepage - JS Dev - Ivan Mankovich';

  return (
    <div className="mt-[48px] xl:mt-0 relative">
      <p className="text-3xl md:text-6xl mt-4 md:mt-16">Hi,</p>
      <p className="text-3xl md:text-6xl mt-0 md:mt-4">I'm</p>
      <h1 className="text-3xl md:text-6xl mt-0 md:mt-4">
        Ivan Mankovich <br />
        <strong>web developer</strong>
      </h1>
      <img
        src={photo}
        alt="Ivan Mankovich web developer"
        className="rounded-full bg-white block w-1/2 max-w-[250px] md:w-1/4 mx-auto md:hidden xl:block static xl:absolute xl:top-0 xl:right-1 xl:w-1/4 shadow-[-16px_-16px_0_2px_rgba(192,38,211,1),16px_16px_0_2px_rgba(74,222,128,1)] xl:shadow-[-2px_-2px_0_2px_rgba(192,38,211,1),2px_2px_0_2px_rgba(74,222,128,1)]"
      />
      <h2 className="text-2xl md:text-4xl mt-2 md:mt-8">
        Front End Developer / Full Stack Developer (React/Node.js) / JavaScript Enthusiast
      </h2>
      <Link to="/contact">
        <button className="inline-block h-[48px] ml-2 mt-2 md:mt-8 text-xl px-4 py-1 text-stone-100 border-none rounded-lg bg-fuchsia-600 hover:bg-green-400 hover:text-black transition align-middle">
          Contact me
        </button>
      </Link>

      <div className="flex justify-between items-start flex-col mt-2 lg:flex-row">
        <div>
          <p className="text-base sm:text-lg xl:text-2xl mt-1 md:mt-2">Experience:</p>
          <h3 className="text-base sm:text-lg xl:text-2xl mt-0 font-bold">3+ years</h3>
        </div>

        <div>
          <p className="text-base sm:text-lg xl:text-2xl mt-1 md:mt-2">Tech stack:</p>
          <h3 className="text-base sm:text-lg xl:text-2xl mt-0 font-bold">React / Angular / Node.js</h3>
        </div>

        <div>
          <p className="text-base sm:text-lg xl:text-2xl mt-1 md:mt-2">Location:</p>
          <h3 className="text-base sm:text-lg xl:text-2xl mt-0 font-bold">Minsk, Belarus</h3>
        </div>
      </div>
    </div>
  );
};
