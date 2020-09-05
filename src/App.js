import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import ImageSearch from "./components/ImageSearch";
require("dotenv").config();

export const App = () => {
  const [image, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <ImageSearch
        searchText={(text) => {
          setTerm(text);
        }}
      />
      {!isLoading && image.length === 0 && (
        <div className="loading">No Images Loading</div>
      )}
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="container ">
          {image.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </>
  );
};
export default App;
