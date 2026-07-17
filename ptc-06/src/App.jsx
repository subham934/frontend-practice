import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  // const [val, setVal] = useState(0);
  const [postData, setPostData] = useState([
    {
      id: 1,
      name: "Arjun Mehta",
      desc: "Just deployed my first full-stack app 🚀 feels unreal!",
      likeCount: 0,
    },
    {
      id: 2,
      name: "Priya Sharma",
      desc: "Golden hour at Bandra Worli Sea Link 🌅 Mumbai never disappoints.",
      likeCount: 0,
    },
    {
      id: 3,
      name: "Kabir Singh",
      desc: "Finally cracked the DSA round — hard work pays off 💪",
      likeCount: 0,
    },
  ]);
  // const changeVal = () => {
  //   // setVal(val + 1)
  //   setVal((previousValue) => previousValue + 1);
  // };

  const like = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likeCount: item.likeCount + 1} : item,
      ),
    );
  };


  const dislike = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likeCount: item.likeCount === 0 ? 0: item.likeCount - 1 } : item,
      ),
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-zinc-900">
      {/* <h1 className="text-4xl mb-4 text-zinc-50 font-bold">{val}</h1>
      <div className="flex gap-4">
        <button
          // onClick={() => {
          //   setVal(val + 1);
          // }}
          onClick={changeVal}
          className="px-8 py-3 rounded bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Increase Value
        </button>
        <button
          onClick={() => {
            setVal(val - 1);
          }}
          className="px-8 py-3 rounded bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Decrease Value
        </button>
      </div> */}

      <Card postData={postData} like={like} dislike={dislike} />
    </div>
  );
};

export default App;
