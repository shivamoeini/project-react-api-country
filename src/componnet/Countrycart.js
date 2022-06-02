import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Countrycard = ({ countryiesCard }) => {


  const [search,setSearch]=useState("");
const searchText=(e)=>{
  setSearch(e.target.value);
}



  return (
    <>
      <div className="nav">
        <div className="searchbox">
          <input type="text" value={search} autoComplete="off" placeholder="Search" onChange={}/>
        </div>
      </div>
      <div className="selectbox">
        <select name="selectbox" id="selectbox"> </select>
      </div>
      <div className="container">
        {countryiesCard?.map((data, index) => (
          <Link key={index} to={`/country/${data.name.common}}`} state={data}>
            <div className="card">
              <img src={data.flags.png} alt={data.name.common} />
              <h3>{data.name.common}</h3>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
