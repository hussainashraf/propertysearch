import React,{useState, useContext} from 'react'
//import icon
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from'@headlessui/react'

//import HouseContext

import {HouseContext} from './HouseContext'
import './house.css'
const CountryDropdown=()=> {
  const {country,setCountry,countries} = useContext(HouseContext);
  const[isOpen,setIsOpen] = useState(false);
  // console.log(countries)
  return (

<Menu  className='dropdown' >
     <Menu.Button className='button' onClick={()=>setIsOpen(!isOpen)}>
     <RiMapPinLine className='dropdown-icon-primary' />
        <div className='dropdown-btn'>
          <div className='dropctr'>{country}</div>
          {
            isOpen?(
              <RiArrowUpSLine
              className='dropdown-icon-primary'/>
            ):(
              <RiArrowDownSLine
              className='dropdown-icon-primary'/>
            )
          }
        </div>
       <Menu.Items>
         {countries.map((country,index)=>{
           return(
             <Menu.Item
             onClick={()=>setCountry(country)}
             as='ul'
             key={index}           
             >
               {country}
               </Menu.Item>
           );
         })}
       </Menu.Items>
       
     </Menu.Button>

        
    </Menu>
  
    
   
  )
}

export default CountryDropdown