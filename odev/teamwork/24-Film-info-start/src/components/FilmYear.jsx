import React, { useState } from "react";
import { data } from "../helper/data";
import FilmInfo from "./FilmInfo";

const FilmYear = ({ data }) => {
  const [year, setYear] = useState();
  const handleClick = () => {
    setYear(!year);
  };
  // console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <button
          key={item.id}
            onClick={handleClick}
            className="border-0 px-2 m-2 fs-4 fw-bold text-secondary"
          >
            {item.date}
          </button>
        );
      })}
      <FilmInfo data={data}/>
    </div>
  );
};

export default FilmYear;
