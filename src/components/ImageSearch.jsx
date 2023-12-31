import { useState } from "react";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-5 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-gray-300 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="w-full appearance-none bg-transparent border-none mr-3 text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
