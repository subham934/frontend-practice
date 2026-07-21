import React from "react";

const Card = ({ postData, deleteHandler, editHandler }) => {
  return (
    <div className="w-full flex flex-wrap gap-5 mt-6">
      {postData.map((post, idx) => (
        <div key={idx} className="bg-zinc-800/80 border flex justify-between border-zinc-700/50 rounded-xl p-5 text-white max-w-sm w-full shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-lg">
          <div className="flex justify-between flex-col">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-100 mb-2">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">{post.desc}</p>
          </div>
<div className="flex flex-col gap-2">
              <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-black px-4 py-2 rounded-3xl" onClick={() => deleteHandler(idx)}>Delete</button>
          <button 
            onClick={() => editHandler(idx)} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-black px-4 py-2 rounded-3xl"
          >
            Edit
          </button>
</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
