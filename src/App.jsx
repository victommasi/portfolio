/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import reactLogo from './assets/react.png';
import reduxLogo from './assets/redux.png';
import tsLogo from './assets/ts.png';
import tailwindLogo from './assets/tailwind.png';
import nodeLogo from './assets/node.png';

const App = () => {
  return (
    <main className="h-screen w-screen bg-slate-800">
      <section className="h-screen w-auto text-white flex justify-center mx-auto my-auto p-4 items-center flex-col bg-gradient-to-r from-cyan-950 to-[#0D5572]">
        <div className="relative flex flex-col gap-2 xl:gap-0 justify-start">
          <h2 className="uppercase text-xl xl:text-3xl font-bold text-sky-200">
            Hi, <span className="animate-hand origin-bottom-right inline-block" aria-label="waving hand emoji">👋</span> I'm Victor Tommasi
          </h2>
          <ul className="flex items-center order-4 xl:order-none xl:absolute gap-6 text-6xl right-16 top-16 text-sky-200">
            <li><a href="https://www.linkedin.com/in/victortommasi/" aria-label="Linkedin Icon" title="My LinkedIn page"><FontAwesomeIcon icon={faLinkedin} className="hover:text-white transition-colors"/></a></li>
            <li><a href="https://github.com/victommasi" aria-label="Github Icon" title="My Github page"><FontAwesomeIcon icon={faGithub} className="hover:text-white transition-colors"/></a></li>
            {/* <li><a href="" aria-label="Pdf file Icon" title="Download Resume"><FontAwesomeIcon icon={faFilePdf} className="hover:text-white transition-colors"/></a></li> */}
          </ul>
          <h1 className="uppercase">
            <p className="uppercase text-5xl lg:text-[5rem] xl:text-[8rem] font-black !leading-[.8] -ml-2">Frontend</p>
            <p className="uppercase text-5xl lg:text-[7rem] xl:text-[10rem] font-black !leading-[.8] -ml-2">Developer</p>
          </h1>
          <h3 className="uppercase text-xl xl:self-end xl:text-2xl font-bold text-sky-200">+8 years Software Engineer</h3>
        </div>
      </section>
      <section className="h-screen w-auto text-white flex p-4 pt-10 mx-auto my-auto items-center flex-col bg-amber-50">
        <div className="relative flex flex-col justify-start items-center gap-4">
          <h2 className="uppercase text-xl xl:text-2xl font-bold text-slate-700">Technologies I like</h2>
          <ul className="flex items-center gap-6">
            <li className="flex flex-col justify-center items-center w-20 h-20 p-2 bg-white rounded-lg shadow-lg">
              <img className="w-12 h-auto" src={reactLogo} alt="react logo" title="React" />
              {/* <p className="text-slate-700 font-bold text-sm">React</p> */}
            </li>
            <li className="flex flex-col justify-center items-center w-20 h-20 p-2 bg-white rounded-lg shadow-lg">
              <img className="w-12 h-auto" src={reduxLogo} alt="redux logo" title="Redux" />
              {/* <p className="text-slate-700 font-bold text-sm">Redux</p> */}
            </li>
            <li className="flex flex-col justify-center items-center w-20 h-20 p-2 bg-white rounded-lg shadow-lg">
              <img className="w-12 h-auto" src={tsLogo} alt="typescript logo" title="Typescript" />
              {/* <p className="text-slate-700 font-bold text-sm">Typescript</p> */}
            </li>
            <li className="flex flex-col justify-center items-center w-20 h-20 p-2 bg-white rounded-lg shadow-lg">
              <img className="w-12 h-auto" src={tailwindLogo} alt="tailwindcss logo" title="TailwindCSS"/>
              {/* <p className="text-slate-700 font-bold text-sm">Tailwind</p> */}
            </li>
            <li className="flex flex-col justify-center items-center w-20 h-20 p-2 bg-white rounded-lg shadow-lg">
              <img className="w-12 h-auto" src={nodeLogo} alt="node.js logo" title="Node.js"/>
              {/* <p className="text-slate-700 font-bold text-sm">Node.js</p> */}
            </li>
          </ul>
        </div>
      </section>
      
    </main>
  )
}

export default App
