import React, { useEffect, useState } from "react";
import axios from "axios";

const SeriesGrid = () => {
  const [images, setImages] = useState([])

  const fetchSeries = async () => {
    try {
      const response = await axios.get(
        "https://content.viaplay.se/pc-se/serier/samtliga"
      );
      const seriesList =
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ]
      const imagesList = seriesList.map((series) => (
       <img className="show" id={`${series.publicPath}`} src={`${series.content.images.landscape.url}`} alt={`${series.publicPath}`}></img>
      ))
      setImages(imagesList)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    fetchSeries()
  }, [])
  debugger

  return <div id="series-grid">{images}</div>;
};

export default SeriesGrid;
