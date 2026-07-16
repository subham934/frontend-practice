import React from "react";
import { Link } from "react-router";

const RecipeCard = (props) => {
  const { id, title, image, description, chef, category, ingredients = [], instructions = [] } = props.recipe;

  // Category badge color theme mapping
  const categoryThemes = {
    breakfast: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    lunch: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    snack: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
    dinner: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  };

  const badgeTheme = categoryThemes[category?.toLowerCase()] || "bg-slate-500/10 text-slate-700 border-slate-500/20";

  return (
    <div className="w-full sm:max-w-[340px] md:max-w-[360px] group bg-slate-50/95 border border-slate-200/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl  transition-all duration-300 flex flex-col">
      <Link to={`/recipes/detail/${id}`} className="block relative w-full h-56 overflow-hidden">
        {/* Category Badge overlay */}
        <span className={`absolute top-4 right-4 z-10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-md shadow-sm ${badgeTheme}`}>
          {category}
        </span>

        {/* Recipe Image */}
        <img
          src={image || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient shadow overlay for the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Chef Tag */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Chef {chef || "Guest"}
            </span>
          </div>

          {/* Title */}
          <Link to={`/recipes/detail/${id}`}>
            <h3 className="text-lg font-bold text-slate-800 hover:text-amber-600 transition-colors duration-150 line-clamp-1">
              {title}
            </h3>
          </Link>

          {/* Description */}
          <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Card Footer Statistics */}
        <div>
          <div className="h-px bg-slate-200/60 my-4" />
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span>{ingredients.length} Ingredients</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 12.408l9-9m-9 0l9 9" />
              </svg>
              <span>{instructions.length} Steps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;



    
