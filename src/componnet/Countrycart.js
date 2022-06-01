import React from "react";
import { Link } from "react-router-dom";
export const Countrycard = ({countryiesCard}) => {
  return (
    <>
    <div className="container">
        {countryiesCard?.map((data, index) => (
          <Link key={index} to="/">
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
