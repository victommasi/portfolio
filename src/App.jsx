/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <main className="h-screen w-screen bg-slate-800">
      <div className="h-screen w-auto text-white flex justify-center mx-auto my-auto items-center flex-col bg-gradient-to-r from-cyan-950 to-sky-950">
        <article className="relative flex flex-col justify-start">
          <h2 className="uppercase text-3xl font-bold text-sky-200">
            Hi, <span className="animate-hand origin-bottom-right inline-block" aria-label="waving hand emoji">👋</span> I'm Victor Tommasi
          </h2>
          <ul className="absolute flex gap-6 text-6xl right-36 top-20 text-sky-200">
            <li><a href="https://www.linkedin.com/in/victortommasi/" aria-label="Linkedin Icon" title="My LinkedIn page"><FontAwesomeIcon icon={faLinkedin} className="hover:text-white transition-colors"/></a></li>
            <li><a href="https://github.com/victommasi" aria-label="Github Icon" title="My Github page"><FontAwesomeIcon icon={faGithub} className="hover:text-white transition-colors"/></a></li>
            {/* <li><a href="" aria-label="Pdf file Icon" title="Download Resume"><FontAwesomeIcon icon={faFilePdf} className="hover:text-white transition-colors"/></a></li> */}
          </ul>
          <h1 className="uppercase text-[10rem] font-black leading-[.8] -ml-2">
            React
            <br/>
            Developer
          </h1>
          <h3 className="uppercase self-end text-2xl font-bold text-sky-200">+8 years Software Engineer</h3>
        </article>
      </div>
      <div className="h-screen w-auto text-white flex justify-center mx-auto my-auto items-center flex-col bg-gradient-to-r from-red-950 to-violet-950">
        <article className="relative flex flex-col justify-start">
          <h2 className="uppercase text-3xl font-bold text-sky-200">
            Hi, <span className="animate-hand origin-bottom-right inline-block" aria-label="waving hand emoji">👋</span> I'm Victor Tommasi
          </h2>
          <ul className="absolute flex gap-6 text-6xl right-36 top-20 text-sky-200">
            <li><a href="https://www.linkedin.com/in/victortommasi/" aria-label="Linkedin Icon" title="My LinkedIn page"><FontAwesomeIcon icon={faLinkedin} className="hover:text-white transition-colors"/></a></li>
            <li><a href="https://github.com/victommasi" aria-label="Github Icon" title="My Github page"><FontAwesomeIcon icon={faGithub} className="hover:text-white transition-colors"/></a></li>
            {/* <li><a href="" aria-label="Pdf file Icon" title="Download Resume"><FontAwesomeIcon icon={faFilePdf} className="hover:text-white transition-colors"/></a></li> */}
          </ul>
          <h1 className="uppercase text-[10rem] font-black leading-[.8] -ml-2">
            React
            <br/>
            Developer
          </h1>
          <h3 className="uppercase self-end text-2xl font-bold text-sky-200">+8 years Software Engineer</h3>
        </article>
      </div>
      
    </main>
  )
}

export default App
