import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import RecipeCard from '../components/RecipeCard'

const Fav = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch the bookmarks from local storage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="py-8 max-w-6xl mx-auto px-4">
      {favorites.length > 0 ? (
        <div>
          {/* Header */}
          <div className="mb-8 border-b border-slate-700/40 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Your Favorite Recipes</h1>
            <p className="mt-2 text-sm text-slate-400">
              A curated collection of your handpicked recipes.
            </p>
          </div>

          {/* Recipes Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        /* Empty State Layout */
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          {/* Heart Graphic */}
          <div className="relative mb-6">
            <div className="absolute inset-0 -m-4 bg-rose-500/10 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-slate-800/80 border border-slate-700 p-6 rounded-full shadow-xl flex items-center justify-center text-rose-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            No Favorites Yet
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            Start exploring recipes and save your top choices here to easily find them later!
          </p>

          <div className="mt-8">
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-200 cursor-pointer"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Fav