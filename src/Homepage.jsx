import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Form.css'
import Form from './Form'
import { useState } from 'react'




const Homepage = () => {
    const [dt,setData]=useState({name:'',age:"",gender:"",address:"",date:""});
    
    const navigate=useNavigate();
const navigateCart=()=>
{
    navigate('/form')
}
 function getdata(e)
 {
    setData(e.target.value)
 }
  return (
    <div className='main'>
        <h1 align="center">NAME OF THE HOSPITAL</h1>
        <h2 align="center">Dr John Doe,MBBS</h2><br/>
        <h3 align="center">752 victoria 123 Street,South Statue 204<br/>Hometown U.S 1234 <br/>PH:(207) 80820142014<br/>FAX:(207) 80820152202</h3>
        <hr></hr>
        <div>
            <form>
                <label>Name of the Patient</label>
                <input type="name" onChange={getdata} value={dt.name} name="name"/><br/>
                <label>Age</label>
                <input type="text" /><br/>
                <label>Gender</label>
                <input type="text" /><br/>
                <label>Address</label>
                <input type="text" /><br/>
                <label>Date</label>
                <input type="date"/><br/>
                </form>
            <button className="btn" onClick={navigateCart}>Click HERE</button>
        </div>
    </div>
  )
}

export default Homepage