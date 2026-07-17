import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-md px-6 py-3 flex items-center justify-between transition-all duration-300">
      {/* Brand Logo */}
      <NavLink to="/" className="flex items-center gap-2 group">
        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800 font-sans group-hover:text-amber-600 transition-colors duration-200">
          Recipe<span className="text-amber-600">Haven</span>
        </span>
      </NavLink>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/fav"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          Favorites
        </NavLink>
      </div>

      {/* Desktop CTA / Action Button */}
      <div className="hidden md:block">
        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            `inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
              isActive
                ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-inner'
                : 'bg-green-600 text-white hover:bg-amber-600'
            }`
          }
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create Recipe
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/fav"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`
            }
          >
            Favorites
          </NavLink>
          <hr className="border-slate-100 my-1" />
          <NavLink
            to="/create-recipe"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md ${
                isActive
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`
            }
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Recipe
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar