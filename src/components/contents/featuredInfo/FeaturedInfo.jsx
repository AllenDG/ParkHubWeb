import React from 'react'
import './featuredInfo.css'
import {Person,BusinessCenter,DriveEta} from '@mui/icons-material';



export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem' style={{backgroundColor:'#27374D'}}>
        <span className='featuredTitle'>Total parking Slot</span>
        <div className='featuredContainer'>
          <span className='featuredUser'>14
          <div className='icons'><BusinessCenter/></div>
          </span>
       
        </div>
       
      </div>

      <div className='featuredItem' style={{backgroundColor:'#526D82'}}>
        <span className='featuredTitle'>Total User</span>
        <div className='featuredContainer'>
          <span className='featuredUser'>7
          <div className='icons'><Person/></div>
          </span>
        </div>
       
    
      </div>

      <div className='featuredItem' style={{backgroundColor:'#8A8F94'}} >
        <span className='featuredTitle'>Total Parking</span>
        <div className='featuredContainer'>
          <span className='featuredUser'>7
          <div className='icons'><DriveEta/></div>
          </span>
        </div>
     
      </div>
    </div>
  )
}
