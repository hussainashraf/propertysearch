import React from 'react'

import {BiBed,BiBath,BiArea} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs';

const House=({house})=>{
    const{imageLg,type,country,address,price,bedrooms,bathrooms,surface,name} = house;
    return (
        <div className='card shadow-sm p-2 mb-5 bg-body rounded'>
            <img  className='d-flex flex-wrap'src={imageLg} alt=''/>
            <div className='p-1'>
           
               <span className='d-flex justify-content-lg-end'> 
                <span><BsHeart/></span>
                </span>
                <div className='pri'>{`$`+price}</div>
                <div className='propname'>{type}</div>
                <div>{country}</div>
                <div className='add'>{address}</div>
                <hr/>
                <div className='d-flex justify-content-evenly mt-0'>
                <div>
                    <div className='d-flex flex-wrap'>
                        <div><BiBed/></div>
                        <div className='ms-1'>{bedrooms}</div>
                        <div className='ms-1'>Beds</div>
                    </div>
                </div>
                <div>
                    <div className='d-flex flex-wrap'>
                        <div><BiBath/></div>
                        <div className='ms-1'>{bathrooms}</div>
                        <div className='ms-1'>Bathrooms</div>
                    </div>
                </div>
                <div>
                    <div className='d-flex flex-wrap'>
                        <div><BiArea/></div>
                        <div className='ms-1'>{surface}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default House