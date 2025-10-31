import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';
const navLinks = [
  { to: '/', label: 'Courses' },

    { to: '/learningPath', label: 'Learning paths' },
  { to: '/admissions', label: 'Tutorial Class' },
  { to: '/contact', label: 'Contact' },

];

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
console.log("hello")
  return (
    <nav className="bg-dark w-full">
      <div className={`max-w-7xl mx-auto px-4 py-3 flex justify-between items-center`}>
        <h1 className="font-bold text-xl tracking-tight text-primary">Zenfratech</h1>
        <button
          className="bg-primary md:hidden text-primary-foreground text-2xl text-primary-foreground rounded hover:bg-accent hover:text-accent-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className=''/>
        </button>
        <div className="hidden md:flex gap-6 ">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `hover:text-foreground transition font-medium ${
                  isActive ? 'border-b-2 border-primary ' : ' text-gray-500 '
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col md:hidden bg-transparent dark:bg-transparent px-4 pb-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-muted-foreground  hover:text-primary no-underline"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
