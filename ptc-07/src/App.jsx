import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [postData, setPostData] = useState(
    JSON.parse(localStorage.getItem("FormData")) || [],
  );

  // Local storage me data save karne ke liye
  useEffect(() => {
    localStorage.setItem("FormData", JSON.stringify(postData));
  }, [postData]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update existing post
      const copyArr = [...postData];
      copyArr[editIndex] = { title, desc };
      setPostData(copyArr);
      setEditIndex(null);
    } else {
      // Create new post
      // const copyArr = [...postData];
      // copyArr.push({ title, desc });
      // setPostData(copyArr);

      setPostData([...postData, { title, desc }]);
    }

    setTitle("");
    setDesc("");
  };

  const deleteHandler = (idx) => {
    setPostData(
      postData.filter((item, index) => {
        return index !== idx;
      }),
    );
  };

  const editHandler = (idx) => {
    setTitle(postData[idx].title);
    setDesc(postData[idx].desc);
    setEditIndex(idx);
  };

  return (
    <div className="w-full h-screen p-5 bg-gray-600">
      <form
        className="flex text-white flex-col rounded-md w-70 h-50 py-5 justify-center items-center border-black border-2 gap-3 bg-zinc-600"
        onSubmit={submitHandler}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          className="outline-0 px-4 py-2 rounded-xl border border-white "
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Enter Your post Desc"
          className="outline-0 px-4 py-2 rounded-xl border border-white"
        />
        <button
          type="submit"
          className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-black px-8 py-3 rounded-3xl"
        >
          {editIndex !== null ? "Update Post" : "Create Post"}
        </button>
      </form>

      <Card
        postData={postData}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
};

export default App;
