
import axios from "axios";
import { useState,useEffect } from "react";

const Homepage = () => {
  const [country,setCountry]=useState();

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(function(res){
      setCountry(res.data)
      console.log(res.data);
    })
  },[])
  return (
    <>
    
    </>
  );
};
export default Homepage;
