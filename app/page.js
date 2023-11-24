'use client';

import Navbar from './components/Navbar';
import Content from './components/Content';
import { useEffect, useRef, useState } from 'react';
import { Loading } from './components/Loading';
import Image from 'next/image';

export default function Home() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const sectionContent = contentRef.current?.querySelectorAll('main section');
      const navLinks = document.querySelectorAll('nav a');

      const handleScroll = () => {
        sectionContent.forEach((sec) => {
          // let top = contentRef.current.scrollTop;
          let top = document.documentElement.scrollTop;
          let scrollHeight = sec.offsetHeight;
          let scrollTop = sec.offsetTop - 100;
          let id = sec.getAttribute('id');
          if (top >= scrollTop && top <= scrollTop + scrollHeight) {
            setActiveSection(id);
            navLinks.forEach((links) => {
              links.classList.remove('active');
              document.querySelector(`nav a[href*= ${id}]`).classList.add('active');
            });
          }
        });
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [contentRef, show]);

  setTimeout(() => {
    setShow(true);
  }, 3000);

  return (
    <main className="main lg:flex lg:pt-20 lg:pl-20 lg:pr-20 ">
      {show ? (
        <>
          <Navbar />
          <Content contentRef={contentRef} />
          <Image src="/hi-robot.gif" alt="robot" width={100} height={100} className="w-20 h-20  max-sm:fixed max-lg:fixed max-lg:top-9 max-lg:right-2 max-sm:top-9 max-sm:right-2 lg:right-0 lg:bottom-0 " />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </main>
  );
}
