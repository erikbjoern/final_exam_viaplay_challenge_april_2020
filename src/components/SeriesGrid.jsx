import React, { useEffect, useState } from "react";
import axios from "axios";

const SeriesGrid = () => {
  let [seriesList, setSeriesList] = useState([])

  const fetchSeries = async () => {
    try {
      const response = await axios.get(
        "https://content.viaplay.se/pc-se/serier/samtliga"
      );
      debugger
      seriesList =
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ]
      const images = seriesList.map((series) => (
        <img id={`${series.publicPath}`} src={`${series.content.images.landscape.url}`} alt={`${series.publicPath}`} />
      ))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    fetchSeries()
  }, [])

  return <div id="series-grid">{seriesList}</div>;
};

export default SeriesGrid;
