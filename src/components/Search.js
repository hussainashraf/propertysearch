import React, { useContext } from "react";
import PriceRangeDropdown from "./PriceRangeDropdown"; // price
import CountryDropdown from "./CountryDropdown"; // locatiom
import PropertyDropdown from "./PropertyDropdown"; //Property type
import DateDropdown from "./DateDropdown";
import "./house.css";
import { HouseContext } from "./HouseContext";
const Search = () => {
  // const { houses } = useContext(HouseContext);
  // console.log(houses);
  const{handleClick} = useContext(HouseContext)
  return (
    <>
      <div className="subheading">
        <h1 className="fw-bold">Search properties to rent</h1>
      </div>
      <div className="filterbox  d-flex flex-wrap justify-content-evenly mt-5 shadow p-4 mb-5 bg-body rounded">
      <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
        
        <DateDropdown />
         <button onClick={()=>handleClick()}
         className="srcbtn">Search</button>
      </div>
    </>
  );
};

export default Search;
