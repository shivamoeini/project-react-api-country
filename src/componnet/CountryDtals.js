import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CountryDtals = () => {

  const { state } = useLocation();
  console.log(state);
  const navigate=useNavigate();
  const goHomepage=()=>{
      navigate("/")
  }
  const lang = Object.keys(state.languages)[0];

  const key = Object.keys(state.name.nativeName)[0];

  return (
    <>
    <button onClick={() => goHomepage()}>Back</button>
    <article>
      <h2>{state.name.common}</h2>
      <img src={state.flags.png} alt={state.name.common} />
      <h5>
        Native Name:
        <span>{state.name.nativeName[key].common}</span>
      </h5>

      <h5>
        Population:
        <span>{state.population}</span>
      </h5>
      <h5>
        Region:
        <span>{state.region}</span>
      </h5>
      <h5>
        Capital:
        <span>{state.capital}</span>
      </h5>
      <h5>
        Languages:
        <span>{state.languages[lang]}</span>
      </h5>
     
      
    </article>
  </>
  );
};
