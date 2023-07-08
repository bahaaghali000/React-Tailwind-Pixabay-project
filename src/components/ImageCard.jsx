const ImageCard = ({ image }) => {
  const imageName = image.pageURL.split("/");
  const tags = image.tags.split(",");

  function handleDownloadClick() {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      canvas.getContext("2d").drawImage(this, 0, 0);
      const dataURI = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.download = `BGM_${imageName[4]}.jpg`;
      link.href = dataURI;
      link.click();
    };
    img.src = image.largeImageURL;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img
        src={image.webformatURL}
        alt="Random Image From Unsplash"
        className="w-full"
      />
      <div className="px-2 py4">
        <div className="font-bold text-xl text-purple-500 mb-2 mt-1">
          <span className="block text-2xl">Photo By:</span>
          <img
            src={image.userImageURL}
            className="w-12 p-2 rounded-full inline-block"
            alt=""
          />
          {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downlaods: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-2 py-4">
        {tags.map((tag, i) => (
          <span
            key={tag + i}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
        <button
          onClick={handleDownloadClick}
          className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded block mt-6 text-center font-bold w-full"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
