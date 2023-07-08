const ImageSorting = ({ images, sorting }) => {
  const handleChange = (e) => {
    let sortedImages = [];
    if (e.target.value === "mdownload") {
      sortedImages = [...images].sort((a, b) => b.downloads - a.downloads);
    } else if (e.target.value === "mviews") {
      sortedImages = [...images].sort((a, b) => b.views - a.views);
    } else if (e.target.value === "mlikes") {
      sortedImages = [...images].sort((a, b) => b.likes - a.likes);
    }
    sorting(sortedImages);
  };
  return (
    <div className="max-w-lg rounded overflow-hidden mb-10 mx-auto text-center px-2 py-2">
      <select
        onChange={handleChange}
        name="select"
        className="text-xl max-w-sm w-full bg-transparent mr-3 text-gray-700 py-1 px-2 leading-tight focus:outline-none border-b-2 border-gray-300"
      >
        <option value="mdownload">Most Downloads</option>
        <option value="mlikes">Most Likes</option>
        <option value="mviews">Most Views</option>
      </select>
    </div>
  );
};

export default ImageSorting;
