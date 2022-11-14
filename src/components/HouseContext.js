import React , { useState,useEffect,createContext} from 'react';
import{housesData} from '../data'

//create context
export const HouseContext = createContext();
const HouseContextProvider=({children})=>{
    const[houses,setHouses] = useState(housesData);
    const[country,setCountry] = useState('Location (any)');
    const[countries,setCountries] = useState([]);
    const[property,setProperty] = useState('Property (any)');
    const[properties,setProperties] = useState([]);
    const[price,setPrice] = useState('Price (any)')
    const[year,setYear] = useState('Year (any)')
    const[loading,setLoading] = useState(false)
    useEffect(() =>{
        const allCountries = houses.map((house)=>{
            return house.country;
        });
       
        //remove countries
        const uniqueCountries = [...new Set(allCountries)]
        // console.log(uniqueCountries)
        setCountries(uniqueCountries)
    },[]);

    useEffect(() =>{
        const allProperties= houses.map((house)=>{
            return house.type;
        });
        // console.log(allProperties)
       
        // remove properties
        const uniqueProperties = [...new Set(allProperties)]
        setProperties(uniqueProperties)
    },[]);

    const handleClick =()=>{
        
        //setloading
        setLoading(true);
        //create the function that checks for any in string
        const isDefault=(str)=>{
            return str.split(' ').includes('(any)')
        };
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);
        const newHouses = housesData.filter((house)=>{
            const housePrice = (parseInt(house.price));
            const houseYear = (parseInt(house.year));

            if(
                house.country === country &&
                house.year ===year&&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ){
                return house
            }
            if(isDefault(country)&&isDefault(property)&&isDefault(price)&&isDefault(year)){
                return house;
            }
            if(!isDefault(country)&&isDefault(property)&&isDefault(price)&&isDefault(year)){
                return house.country === country;
            }
            if(!isDefault(property)&&isDefault(country)&&isDefault(price)&&isDefault(year)){
                return house.type === property;
            }
            if(!isDefault(price)&&isDefault(property)&&isDefault(country)&&isDefault(year)){
                if(housePrice>=minPrice&&housePrice<=maxPrice){
                    return house;
                }
            }
            if(!isDefault(year)&&isDefault(property)&&isDefault(price)&&isDefault(country)){
                return house.year === year;
            }
            if(isDefault(year)&&!isDefault(property)&&isDefault(price)&&!isDefault(country)){
                return house.country === country && house.type === property
            }
        
        });
        setTimeout(()=>{
            return (
                newHouses.length<1?setHouses([]):
            setHouses(newHouses),
            setLoading(false)
            )
        },800);
    }



  return<HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    year,
    setYear,
    handleClick,
    loading
    }}>{children}</HouseContext.Provider>
  };
export default HouseContextProvider;