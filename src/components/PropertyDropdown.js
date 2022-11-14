import React,{useState,useEffect, useContext} from 'react'
//import icon
import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from'@headlessui/react'

//import HouseContext

import {HouseContext} from './HouseContext'
import './house.css'
const PropertyDropDown=()=> {
  const {property,setProperty,properties} = useContext(HouseContext);
  const[isOpen,setIsOpen] = useState(false);
  // console.log(properties)
  return (

<Menu  className='dropdown' >
     <Menu.Button className='button' onClick={()=>setIsOpen(!isOpen)}>
     <RiHome5Line className='dropdown-icon-primary' />
        <div className='dropdown-btn'>
          <div className='dropctr'>{property}</div>
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
         {properties.map((property,index)=>{
           return(
             <Menu.Item
             onClick={()=>setProperty(property)}
             as='ul'
             key={index}           
             >
               {property}
               </Menu.Item>
           );
         })}
       </Menu.Items>
     </Menu.Button>
        
    </Menu>
  
    
   
  )
}

export default PropertyDropDown