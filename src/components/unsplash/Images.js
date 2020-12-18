import React, { useEffect, useState } from "react";
import axios from "axios";

import "./images.css";
import Loading from "../loading/Loading";

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  useEffect(() => {
    //
    let getImages = async () => {
      let url = "https://api.unsplash.com";
      let key = "YdJPsh75M1W3yzSHQ8qlWz9H0qO1xbeJ-oLwAhP9kUU";

      let response = await axios.get(
        `${url}/photos/random?client_id=${key}&count=8`
      );
      let data = await response.data;
      setLoading(true);
      setTimeout(() => {
        setImages(data);
        setLoading(false);
      }, 1000);
    };
    //
    getImages();
    //
  }, []);

  return (
    <>
      {loading && <Loading />}

      <div className="unsplash">
        {images.map((elem) => {
          return (
            <div key={elem.id}>
              <div className="animate__animated animate__fadeInUp images">
                <a
                  href={elem.urls.regular}
                  data-lightbox="my-gallery"
                  data-title={elem.alt_description}
                >
                  <img src={elem.urls.regular} alt={elem.alt_description} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Images;
