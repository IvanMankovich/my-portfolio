import quiz2 from '../../static-assets/images/quiz/img2.jpg';
import quiz3 from '../../static-assets/images/quiz/img3.jpg';
import quiz4 from '../../static-assets/images/quiz/img4.jpg';

import broadcast1 from '../../static-assets/images/broadcast/img1.jpg';
import broadcast2 from '../../static-assets/images/broadcast/img2.jpg';
import broadcast3 from '../../static-assets/images/broadcast/img3.jpg';

import arch1 from '../../static-assets/images/archive/img1.jpg';
import arch2 from '../../static-assets/images/archive/img2.jpg';
import arch3 from '../../static-assets/images/archive/img3.jpg';

export const Protfolio = () => {
  document.title = 'Portfolio - JS Dev - Ivan Mankovich';

  return (
    <div className="mt-[48px] xl:mt-0 relative">
      <h1 className="text-3xl md:text-6xl mt-0 md:mt-4">Protfolio</h1>
      <div className="block box-border mt-2 xl:mt-4">
        <div className="flex justify-start items-center flex-col">
          <h2 className="text-xl font-bold">Quiz / Jul 2022</h2>
          <div className="relative flex flex-col sm:flex-row sm:justify-between justify-start items-center px-2">
            <img
              src={quiz2}
              alt=""
              className="w-2/3 sm:w-1/4 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={quiz3}
              alt=""
              className="w-2/3 sm:w-1/4 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={quiz4}
              alt=""
              className="w-2/3 sm:w-1/4 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
          </div>
          <div>
            <p className="mt-1 sm:mt-4 font-bold">Description:</p>
            <p>
              Quiz MVP SPA (mostly intended to use it on mobile devices) with ability to record audio and video in
              response for every question and send it to server storage.
            </p>
            <p className="mt-1 sm:mt-4 font-bold">Tech stack:</p>
            <p>React/TypeScript, React-Router, Zustand, Ionic, Axios, Vercell,i18n, Firebase, GitHub</p>
          </div>
        </div>

        <div className="flex justify-start items-center flex-col mt-4 sm:mt-8">
          <h2 className="text-xl font-bold">Multimedia content selling platform / Oct 2021 - Jun 2022</h2>
          <div className="relative flex flex-col justify-start items-center">
            <img
              src={broadcast1}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={broadcast2}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={broadcast3}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
          </div>
          <div>
            <p className="mt-1 sm:mt-4 font-bold">Description:</p>
            <p>
              SPA B2B-platform developed for broadcaster and producers the main aim of which is to sell/buy multimetia
              content in accordance with user roles and rights.
            </p>
            <p className="mt-1 sm:mt-4 font-bold">Tech stack:</p>
            <p>React/TypeScript, Mobx, React-Router, Storybook, GitLab</p>
          </div>
        </div>

        <div className="flex justify-start items-center flex-col mt-4 sm:mt-8">
          <h2 className="text-xl font-bold">Archive / Oct 2020 - Oct 2021</h2>
          <div className="relative flex flex-col justify-start items-center">
            <img
              src={arch1}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={arch2}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
            <img
              src={arch3}
              alt=""
              className="w-2/3 shadow-[2px_2px_0_2px_rgba(192,38,211,1),-2px_-2px_0_2px_rgba(74,222,128,1)] mt-4"
            />
          </div>
        </div>
        <div>
          <p className="mt-1 sm:mt-4 font-bold">Description:</p>
          <p>
            SPA which provides easy access to store, manage and search documents and their digital copies in accordance
            with user roles and rights.
          </p>
          <p className="mt-1 sm:mt-4 font-bold">Tech stack:</p>
          <p>Tech stack: React/TypeScript, Node.js, PostgreSQL, GraphQL, AntD</p>
        </div>
      </div>
    </div>
  );
};
