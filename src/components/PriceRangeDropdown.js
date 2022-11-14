import React,{useState,useEffect, useContext} from 'react'
//import icon
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from'@headlessui/react'

//import HouseContext

import {HouseContext} from './HouseContext'
import './house.css'
const PriceRangeDropdown=()=> {
  const {price,setPrice} = useContext(HouseContext);
  const[isOpen,setIsOpen] = useState(false);
  // console.log(properties)
  const prices =[
    {
      value:'20000 - 32000'
    },
    {
      value:'32000 - 38000'
    },
    {
      value:'38000 - 110000'
    } , {
      value:'110000 - 180000'
    },
    {
      value:'180000 - 250000'
    }
  ]
  return (

<Menu  className='dropdown' >
     <Menu.Button className='button' onClick={()=>setIsOpen(!isOpen)}>
     <RiWallet3Line className='dropdown-icon-primary' />
        <div className='dropdown-btn'>
          <div className='dropctr'>{price}</div>
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
         {prices.map((price,index)=>{
           return(
             <Menu.Item
             onClick={()=>setPrice(price.value)}
             as='ul'
             key={index}           
             >
               {price.value}
               </Menu.Item>
           );
         })}
       </Menu.Items>
     </Menu.Button>
        
    </Menu>
  
    
   
  )
}

export default PriceRangeDropdown