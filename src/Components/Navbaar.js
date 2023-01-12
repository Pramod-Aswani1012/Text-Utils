import './style.css'
import { MDBSwitch } from 'mdb-react-ui-kit';
import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbaar(props) {

  const changeRed = ()=>
  {
    
    document.body.style.backgroundColor='#ec5757';
  }
  const changeGreen = ()=>{
    document.body.style.backgroundColor='#61f261';
  }
  const changeBlue = ()=>{
    document.body.style.backgroundColor='#7272fc';
  }
  const changeYellow = ()=>{
    document.body.style.backgroundColor='#fafa6b';
  }

  return (
    <div className="navbaar bg-wheat">
      <li className="item" id='t'><Link to="/">Text Utils</Link></li>
      <li className="item"><Link to="/">Home</Link></li>
      <li className="item"><Link to="./about">About</Link></li>
      <li className="item"><Link to="./services">Services</Link></li>
      <li className="item"><Link to="/contactus">Contact US</Link></li>
      {/* <input type="checkbox" name="" id="" /> */}
      <div id="ThemeButtons">
        <button id="bttn-1-red" className='themebtn' onClick={changeRed}>
        
          </button>
        <button id="bttn-2-blue" className='themebtn' onClick={changeBlue}>
                  
          </button>
        <button id="bttn-3-green" className='themebtn' onClick={changeGreen}>
        
          </button>
          <button id="bttn-4-yellow" className='themebtn' onClick={changeYellow}>
        
          </button>
          <p>Change Theme</p>
        </div>
      <div id='drk' className={`item text-${props.mode==='white'? 'dark' : 'white'} `}>
      <MDBSwitch id='flexSwitchCheckDefault'  onClick={props.toggleMode} label='Enable Dark Mode' />
      </div>
      
    </div>
  )
}

