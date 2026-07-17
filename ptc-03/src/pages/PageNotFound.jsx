import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 text-center">
      {/* Illustration container */}
      <div className="relative mb-8">
        {/* Pulse Glow Effect */}
        <div className="absolute inset-0 -m-6 bg-amber-500/10 blur-3xl rounded-full animate-pulse" />

        {/* Floating Chef Hat & Magnifying Glass SVG */}
        <div className="relative bg-slate-800/80 border border-slate-700 p-8 rounded-full shadow-2xl flex items-center justify-center text-amber-500">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {/* Chef Hat outline */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 1.258.387 2.425 1.05 3.4C6.42 12.28 6 13.59 6 15c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4 0-1.41-.42-2.72-1.05-3.6.663-.975 1.05-2.142 1.05-3.4 0-3.314-2.686-6-6-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v2h6v-2" />
            {/* Magnifying Glass search */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a4 4 0 11-5.656-5.656 4 4 0 015.656 5.656z" />
          </svg>
        </div>
      </div>

      {/* Message */}
      <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">Error 404</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
        Recipe Lost in Space
      </h1>
      <p className="mt-4 text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
        The ingredients for this page couldn't be found. It may have been eaten, deleted, or moved to another burner.
      </p>

      {/* Call to Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-200 cursor-pointer"
        >
          Go Back Home
        </Link>
        <Link
          to="/recipes"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 text-slate-300 hover:text-slate-100 font-semibold text-sm transition-all duration-200 cursor-pointer"
        >
          Browse Recipes
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound