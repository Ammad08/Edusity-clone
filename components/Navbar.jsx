"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // state for opening and closing the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // toggle mobile menu
  };
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="">
      {/* Nav For Larger Screen */}
      <header
        className={`text-white fixed body-font pl-10  w-auto   mx-24 z-50 ${
          isScrolled ? "bg-[#212EA0] " : "bg-transparent"
        } hidden custom:block transition-colors duration-300`}
      > 
        <div className="container mx-auto px-10 py-3 flex items-center justify-between">
          <div className="w-1/3">
            <Image src="/nav.png" className="mr-24" alt="logo" width={180} height={180} />
          </div>
          <div className="flex items-center space-x-4">
            <nav className="custom:ml-auto flex items-center text-base justify-between">
              <button className="mr-5 lg:mr-12 hover:text-gray-200" onClick={() => handleScrollTo('home')}>Home</button>
              <button className="mr-5 lg:mr-12 hover:text-gray-200" onClick={() => handleScrollTo('program')}>Program</button>
              <button className="mr-5 lg:mr-12 hover:text-gray-200 text-nowrap" onClick={() => handleScrollTo('about')}>About us</button>
              <button className="mr-5 lg:mr-12 hover:text-gray-200" onClick={() => handleScrollTo('campus')}>Campus</button>
              <button className="mr-5 lg:mr-12 hover:text-gray-200" onClick={() => handleScrollTo('testimonials')}>Testimonials</button>
            </nav>
            <button onClick={() => handleScrollTo('contact')} className="inline-flex items-center bg-gray-100 text-black border-0 py-3 px-6  focus:outline-none hover:bg-gray-200 rounded-3xl text-base text-nowrap">
              Contact us
            </button>
          </div>
        </div>
      </header>

      {/* Nav For Medium and Small Screen */}
      <header
        className={`text-white fixed body-font px-5 w-full z-50 custom:hidden ${
          isScrolled ? "bg-[#212EA0]" : "bg-transparent"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center z-50"> {/* Added higher z-index to keep the hamburger visible */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slides in from the right) */}
        <nav
          className={`fixed top-0 right-0 h-full w-1/2 md:w-1/3 bg-[#212EA0] z-40 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center py-10 space-y-6">
            <li>
              <button onClick={() => handleScrollTo('home')} className="text-white hover:text-gray-200">
                Home
              </button>
            </li>
            <li>
              <button  onClick={() => handleScrollTo('program')} className="text-white hover:text-gray-200">
                Program
              </button>
            </li>
            <li>
              <button  onClick={() => handleScrollTo('about')} className="text-white items-center hover:text-gray-200">
                About Us
              </button>
            </li>
            <li>
              <button  onClick={() => handleScrollTo('campus')} className="text-white hover:text-gray-200">
                Campus
              </button>
            </li>
            <li>
              <button  onClick={() => handleScrollTo('testimonials')} className="text-white hover:text-gray-200">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('contact')} className="bg-gray-100 text-black border-0 py-3 px-6 rounded-3xl hover:bg-gray-200 text-nowrap">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
