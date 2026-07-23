import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [Page, setPage] = useState(1);
  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list", {
      params: {
        page: Page,
        limit: 10,
      },
    });
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, [Page]);

  return (
    <div className="p-5">
      <button
        // onClick={() => getData()}
        className="py-1 px-8 rounded-md bg-blue-500 cursor-pointer active:scale-95"
      >
        Get Data
      </button>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {data &&
          data.map((item) => (
            <div
              className="w-60 h-60 bg-zinc-300 rounded-md flex items-center justify-center overflow-hidden"
              key={item.id}
            >
              <img
                className="w-full h-full object-cover "
                src={item.download_url}
                alt=""
              />
            </div>
          ))}
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <button
          onClick={() => Page > 1 && setPage(Page - 1)}
          className="bg-blue-500  px-5 font-black text-white py-1 rounded-xl cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(Page + 1)}
          className="bg-green-500  px-5 font-black text-white py-1 rounded-xl cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
