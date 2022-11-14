import React,{useState,useContext} from 'react'
//import icon
import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import {Menu} from'@headlessui/react'

//import HouseContext

import {HouseContext} from './HouseContext'
import './house.css'
const DateDropdown=()=> {
  const {year,setYear} = useContext(HouseContext);
  const[isOpen,setIsOpen] = useState(false);
  const years =[
    {
      value:'2010'
    },
    {
      value:'2011'
    },
    {
      value:'2012'
    } , {
      value:'2013'
    },
    {
      value:'2014'
    },{
      value:'2015'
    },{
      value:'2016'
    }
  ]
  // console.log(year)
  return (

<Menu  className='dropdown'>
     <Menu.Button className='button' onClick={()=>setIsOpen(!isOpen)}>
     <RiHome5Line className='dropdown-icon-primary' />
        <div className='dropdown-btn'>
          <div className='dropctr'>{year}</div>
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
         {years.map((year,index)=>{
           return(
             <Menu.Item
             onClick={()=>setYear(year.value)}
             as='ul'
             key={index}           
             >
               {year.value}
               </Menu.Item>
           );
         })}
       </Menu.Items>
     </Menu.Button>
        
    </Menu>
  
    
   
  )
}

export default DateDropdown