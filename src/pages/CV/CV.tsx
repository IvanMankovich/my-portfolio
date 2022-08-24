import photo from '../../static-assets/images/photo.png';
import pdf from '../../static-assets/files/Ivan_Mankovich_JS-dev_CV.pdf';
import doc from '../../static-assets/files/Ivan_Mankovich_JS-dev_CV.doc';
import docx from '../../static-assets/files/Ivan_Mankovich_JS-dev_CV.docx';

export const CV = () => {
  document.title = 'CV - JS Dev - Ivan Mankovich';

  return (
    <div className="mt-[48px] xl:mt-0 relative">
      <h1 className="text-3xl md:text-6xl mt-0 md:mt-4 print:hidden">My CV</h1>
      <button
        className="
        mt-2
        xl:mt-4
      
      w-full
      px-8
      py-3
      bg-slate-100
      text-slate-800
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      border-t-2 border-t-fuchsia-600
      border-l-2 border-l-fuchsia-600
      border-b-2 border-b-green-400
      border-r-2 border-r-green-400
      shadow-md
      hover:bg-slate-300 hover:shadow-lg
      focus:bg-slate-300 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-400 active:shadow-lg
      transition
      duration-150
      ease-in-out
      print:hidden
      block
      max-w-none
      xs:max-w-[160px]
    mx-auto
      md:inline-block"
        onClick={() => window.print()}
      >
        Print CV
      </button>

      <div
        className="mt-2
        xl:mt-4
      w-full
      px-8
      py-3
      bg-slate-100
      text-slate-800
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      border-t-2 border-t-fuchsia-600
      border-l-2 border-l-fuchsia-600
      border-b-2 border-b-green-400
      border-r-2 border-r-green-400
      shadow-md
      hover:bg-slate-300 hover:shadow-lg
      focus:bg-slate-300 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-400 active:shadow-lg
      transition
      duration-150
      ease-in-out
      print:hidden
      relative
      dropdown
      md:ml-2
      text-center
      block
      max-w-none
      xs:max-w-[160px]
    mx-auto
      md:inline-block
      "
      >
        <button className="dropbtn text-center">LOAD CV</button>
        <div className="hidden absolute top-full left-0 w-full z-[1] bg-slate-200/90 dropdown-content">
          <a
            href={pdf}
            download={'Ivan_Mankovich_JS-dev_CV'}
            className="block mx-auto hover:bg-black/25 transition-colors px-8 py-3"
          >
            PDF
          </a>

          <a
            href={doc}
            download={'Ivan_Mankovich_JS-dev_CV'}
            className="block box-border mx-auto hover:bg-black/25 transition-colors mt-2 px-8 py-3"
          >
            DOC
          </a>

          <a
            href={docx}
            download={'Ivan_Mankovich_JS-dev_CV'}
            className="block box-border mx-auto hover:bg-black/25 transition-colors mt-2 px-8 py-3"
          >
            DOCX
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-start items-start box-border mt-2 xl:mt-4 print:flex-row">
        <img
          src={photo}
          alt="Ivan Mankovich web developer"
          className="grow-0 shrink-0 rounded-full bg-white block w-1/2 max-w-[200px] h-auto self-start mx-auto md:m-0 xl:w-1/4"
        />
        <div className="m-0 md:ml-2">
          <h1 className="font-bold text-lg">Ivan Mankovich - JavaScript Developer</h1>
          <p className="print:text-xs">DoB: 05.03.1994</p>
          <p className="print:text-xs">Belarus, Minsk</p>
          <p className="print:text-xs before:content-['Phone:_+375_29_719_83_52']"></p>
          <p className="print:text-xs before:content-['Telegram:_t.me/ivan\_mankovich']"></p>
          <p className="print:text-xs">
            E-mail:{' '}
            <a className="print:text-xs" href="mailto:mankovich.ivan@gmail.com">
              mankovich.ivan@gmail.com
            </a>
          </p>
          <p className="print:text-xs">
            LinkedIn:{' '}
            <a href="https://linkedin.com/in/ivan-mankovich/" target="_blank" rel="noreferrer">
              linkedin.com/in/ivan-mankovich/
            </a>
          </p>
          <p className="print:text-xs">
            GitHub:{' '}
            <a href="https://github.com/IvanMankovich" target="_blank" rel="noreferrer">
              github.com/IvanMankovich
            </a>{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start print:flex-row">
        <div className="print:mr-2">
          <h2 className="print:text-lg print:font-bold text-2xl md:text-4xl mt-0 md:mt-2">Skills</h2>
          <div className="mt-2 xl:mt-4 print:mt-0">
            <table className="border-collapse border-spacing-2 w-full">
              <tbody>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">HTML / CSS coding:</td>
                  <td className="pl-2 align-top print:text-xs">
                    HTML CSS, Sass/Less/Scss, Responsive and cross-browser coding, BEM, Atomic
                  </td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Frameworks / Libraries:</td>
                  <td className="pl-2 align-top print:text-xs">
                    React/TypeScript, Next, Angular, Gatsby, Jekyll, Redux, Mobx, Apollo Client, StoryBook
                  </td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">UI-libraries:</td>
                  <td className="pl-2 align-top print:text-xs">AntD, Bootstrap, MUI, TailWind</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Backend experience:</td>
                  <td className="pl-2 align-top print:text-xs">
                    Node.js, Express, Nest, GraphQL, Apollo Server, Sequelize, Mongoose
                  </td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Databases:</td>
                  <td className="pl-2 align-top print:text-xs">MongoDB, PostgreSQL, SQLite</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Testing tools:</td>
                  <td className="pl-2 align-top print:text-xs">Jest, React Testing Library, Mocha, Chai</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Project builders:</td>
                  <td className="pl-2 align-top print:text-xs">WebPack, Rollup</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">IDE:</td>
                  <td className="pl-2 align-top print:text-xs">Visual Studio Code</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">OS platforms:</td>
                  <td className="pl-2 align-top print:text-xs">Windows, MacOS</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Documentation tools:</td>
                  <td className="pl-2 align-top print:text-xs">Confluence</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Tracking tools:</td>
                  <td className="pl-2 align-top print:text-xs">Redmine, Trello, YouTrack</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Version control systems:</td>
                  <td className="pl-2 align-top print:text-xs">GitHub, GitLab, Azure DevOps Server (TFS)</td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs">Deployment tools:</td>
                  <td className="pl-2 align-top print:text-xs">Azure DevOps Server (TFS), GitLab</td>
                </tr>
                <tr>
                  <td className="align-top font-bold print:text-xs">Project methodologies:</td>
                  <td className="pl-2 align-top print:text-xs">Scrum, Agile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="print:text-lg print:font-bold text-2xl md:text-4xl mt-0 md:mt-2">Work experience</h2>
          <div>
            <table className="border-collapse border-spacing-2">
              <tbody>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs" colSpan={2}>
                    10/2021 – 08/2022 – DashBouquet
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold print:text-xs">JavaScript Developer</td>
                  <td className="pl-2 align-top print:text-xs">
                    <ul>
                      <li>
                        Develop online catalog with clearly structured and highly personalized content presentation
                        containing video streaming, virtual meeting, events platform and Single Sign-On ability for
                        clients and administrators (React/TypeScript, StoryBook).
                      </li>
                      <li>
                        Quiz MVP SPA (mostly intended to use it on mobile devices) with ability to record audio and
                        video in response for every question and send it to server storage (React/TypeScript,
                        React-Router, Zustand, Ionic, Axios, Vercell,i18n, Firebase, GitHub).
                      </li>
                      <li>
                        Creating static web-sites and blogs with Gatsby and Jekyll (Gatsby/React/GraphQL, Jekyll).
                      </li>
                      <li>
                        Learning and creating pet-projects such as audio library (React/Next, MUI, Nest, MongoDB,
                        Mongoose) and online-shop (Angular, Angular Material, Rest API).
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="align-top font-bold print:text-xs h-4" colSpan={2}></td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs" colSpan={2}>
                    10/2020 – 10/2021 – MRSoft
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold print:text-xs">Front-end Developer</td>
                  <td className="pl-2 align-top print:text-xs">
                    <ul>
                      <li>
                        Take part in creating components library and SPA which provides easy access to store, manage and
                        search documents and their digital copies in accordance with user roles and rights
                        (React/TypeScript, Redux, Apollo Client, PostgreSQL, GraphQL, AntD, StoryBook).
                      </li>
                      <li>
                        Learning and creating pet-projects such as task manager (React/TypeScript, Redux, Apollo Client,
                        Bootstrap, Express, jwt, Apollo Server, GraphQL, MongoDB, Mongoose).
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="align-top font-bold print:text-xs h-4" colSpan={2}></td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs" colSpan={2}>
                    09/2019 – 10/2020 – Self-education at home
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold print:text-xs">Trainee</td>
                  <td className="pl-2 align-top print:text-xs">
                    <ul>
                      <li>
                        Learning React and creating ToDo app (React, Redux, React-Router, AJAX, Bootstrap, Node.js,
                        Express.js).
                      </li>
                      <li>
                        Creating Sorting Algorithms app which shows how different types of sorting work step by step
                        (React, styled-components, react-animations).
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="align-top font-bold print:text-xs h-4" colSpan={2}></td>
                </tr>
                <tr className="border-b border-solid border-slate-600">
                  <td className="align-top font-bold print:text-xs" colSpan={2}>
                    05/2019 – 09/2019 – Educational Center of HTP
                  </td>
                </tr>
                <tr>
                  <td className="align-top font-bold print:text-xs">Trainee</td>
                  <td className="pl-2 align-top print:text-xs">
                    Web application development with JavaScript, data types, object-oriented JS, DOM, events, AJAX, Git,
                    Node.js, WebPack
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="print:text-lg print:font-bold text-2xl md:text-4xl mt-0 md:mt-2">Education</h2>
          <table className="border-collapse border-spacing-2">
            <tbody>
              <tr>
                <td className="align-top font-bold print:text-xs">05/2019 – 09/2019 – Educational Center of HTP</td>
                <td className="pl-2 align-top print:text-xs">
                  Web application development with JavaScript, data types, object-oriented JS, DOM, events, AJAX, Git,
                  Node.js, WebPack
                </td>
              </tr>

              <tr>
                <td className="align-top font-bold print:text-xs h-2" colSpan={2}></td>
              </tr>
              <tr>
                <td className="align-top font-bold print:text-xs">
                  09/2011 – 06/2016 International University “MITSO”
                </td>
                <td className="pl-2 align-top print:text-xs">
                  Specialization: International Lawyer (International Commercial Law) Faculty: Faculty of law
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
