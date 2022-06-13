import React from 'react'
import './Form.css'
const Form = (dt) => {
  return (
    <div className='main'>
        <h1 align="center">NAME OF THE HOSPITAL</h1>
        <h2 align="center">Dr John Doe,MBBS</h2><br/>
        <h3 align="center">752 victoria 123 Street,South Statue 204<br/>Hometown U.S 1234 <br/>PH:(207) 80820142014<br/>FAX:(207) 80820152202</h3>
        <hr></hr>
        <div>
            <form>
                <label>Name of the Patient</label>
                <input type="name" value={dt.name}/><br/>
                <label>Age</label>
                <input type="text" /><br/>
                <label>Gender</label>
                <input type="text" /><br/>
                <label>Address</label>
                <input type="text" /><br/>
                <label>Date</label>
                <input type="date"/><br/>
            <label>Doctor's Signature</label>
            <input type="text" /><br/>
                
            </form>
        </div>
    </div>
  )
}

export default Form