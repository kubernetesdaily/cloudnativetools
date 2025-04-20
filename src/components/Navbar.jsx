import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => 
    isActive 
      ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' 
      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

  return (
    <nav className="bg-bgGray shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-primary text-xl font-bold">CN Tools</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className={getNavLinkClass} end>Tools</NavLink>
                <NavLink to="/blog" className={getNavLinkClass}>Blog</NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            }
            onClick={() => setIsOpen(false)}
            end
          >
            Tools
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive 
                ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            }
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 