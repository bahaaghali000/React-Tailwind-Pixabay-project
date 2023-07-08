import { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import ImageSorting from "./components/ImageSorting";
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=38129828-6587438185a9e5fc6b46b7f8d&q=${term}&image_type=photo&pretty=true`
      )
      .then((data) => {
        setImages(data.data.hits.sort(() => 0.5 - Math.random()));
        setIsLoading(false);
      });
  }, [term]);
  return (
    <div className="container mx-auto">
      <h1 className="max-w-sm rounded overflow-hidden my-10 mx-auto text-center text-4xl font-bold text-purple-500">
        BGM
      </h1>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <ImageSorting images={images} sorting={(sort) => setImages(sort)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-48">No Image Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 place-items-center">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
