import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="lg:w-1/2 p-2 lg:h-screen lg:sticky lg:overflow-auto lg:top-0 max-sm:p-4 max-lg:p-5">
      <h1 className="text-4xl font-bold mb-3">Abel Akmal</h1>
      <h2 className="text-xl">Full-Stack Develover</h2>
      <p id="prag" className="border-b-4 py-3 mb-2">
        Hello, I am a Web Developer who explains the Web with Javascript.
      </p>
      <Link className="opacity-100 hover:border-b-2" href="https://drive.google.com/file/d/1aMPjSS20Tf9XwvAiBcaeUCDopwOfHNQ9/view?usp=sharing">
        View Resume <FontAwesomeIcon icon={faLink} bounce />
      </Link>
      <section className="mt-28 hidden lg:block">
        <ul className="nav">
          <li className="p-2 text-lg  w-max">
            <a href="#about" className="flex active">
              <span className="line"></span>ABOUT
            </a>
          </li>
          <li className="p-2 text-lg  w-max">
            <a href="#skill" className="flex">
              <span className="line"></span>SKILL
            </a>
          </li>
          <li className="p-2 text-lg  w-max">
            <a href="#project" className="flex">
              <span className="line"></span>PROJECT
            </a>
          </li>
        </ul>
      </section>
      <section className="lg:mt-32 max-sm:mt-8">
        <ul className="sosmed flex max-lg:mt-5">
          <li className="pr-5 ">
            <Link href="https://wa.me/6285273415295" className='opacity-50  hover:opacity-100'>
              <FontAwesomeIcon icon={faWhatsapp} className="max-sm:text-2xl  max-lg:text-3xl lg:text-4xl" />
            </Link>
          </li>
          <li className="pr-5 ">
            <Link href="https://github.com/Abelakmal" className='opacity-50 hover:opacity-100'>
              <FontAwesomeIcon icon={faGithub} className="max-sm:text-2xl max-lg:text-3xl text lg:text-4xl " />
            </Link>
          </li>
          <li className="pr-5 ">
            <Link href="#" className='opacity-50 hover:opacity-100'>
              <FontAwesomeIcon icon={faLinkedin} className="max-sm:text-2xl max-lg:text-3xl lg:text-4xl " />
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
