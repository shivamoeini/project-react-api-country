import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CountryDtals = () => {

  const { state } = useLocation();
  console.log(state);
  const navigate=useNavigate();
  const goHomepage=()=>{
      navigate("/")
  }
  return (
    <>
      {/* <h1>{state.name.common}</h1> */}
      <button onClick={()=>goHomepage()}>Back</button>
    </>
  );
};
