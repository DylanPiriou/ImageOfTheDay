import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [getImg, setGetImg] = useState([]);

  const handleDate = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=uP3eEPuXDL6MC0rW7SfdOOt33Tbaq5D553tabMed`
      )
      .then((res) => setGetImg(res.data));
  }, []);

  return (
    <div className="main-header">
      <h1 className="title">{getImg.title}</h1>
      <span className="date">
        Pictured on {getImg.date && handleDate(getImg.date)}
      </span>
      <img className="picture" src={getImg.hdurl} alt="img of the day" />
      <p className="text">{getImg.explanation}</p>
    </div>
  );
}

export default App;
