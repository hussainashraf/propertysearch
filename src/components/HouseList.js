import React, { useContext } from "react";
//import context
import { HouseContext } from "./HouseContext";
//import components
import House from "./House";
//import link
import { Link } from "react-router-dom";
//import icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log(houses)
  if(loading){
    return(
      <div className="position-absolute top-50 start-50 translate-middle"><svg className="spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="50" cy="50" r="30"
        fill="transparent"
        stroke-width="8px"
        stroke-dasharray="160"
      />
    </svg></div>

    )
  }
  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }
  return (
    <section >
      <div className="container ">
        <div className="row row-cols-3">
          {houses.map((house, index) => {
            return (
            //   <Link to={`/property/${house.id}`} key={index}>
            <> <House house={house} /></>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
