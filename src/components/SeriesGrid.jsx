import React from "react";
import axios from "axios";

const SeriesGrid = () => {
  let seriesList = [];
  const fetchSeries = () => {
    try {
      const response = axios.get(
        "https://content.viaplay.se/pc-se/serier/samtliga"
      );
      seriesList =
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ];
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="series-grid">{seriesList}</div>;
};

export default SeriesGrid;
