import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

function Contact() {

  return (
    <div style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center',marginTop:'5%'}}>Contact me☎️</h2>
        <form action="" className='p-5 mt-5 m-5 shadow'style={{boxShadow:'15px 15px 15px 10px black'}}>
    <MDBInput label="Name" id="form1" type="text" className='mb-3' />
    <MDBInput label="Email" id="form1" type="text" className='mb-3' />
    <MDBInput label="Message" id="form1" type="text" className='mb-3' />
    <button className='btn btn-primary'>Submit</button>
    </form>
    </div>
  )
}

export default Contact