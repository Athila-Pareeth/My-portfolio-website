import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Home({myImage}) {
  return (
    <div style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2021/12/15/17/15/technology-6873010_640.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    width:'100%',
    height:'100vh',
    textAlign: 'center',
    color:'white',
    paddingTop:'20%'
    
    }}>
    <div >
        <h1>Full Stack Developer</h1>
        <h1>MEA(R)N</h1>
        <h2>Athila Pareeth</h2>
    </div>
 <div> 
    <div className="row m-5 shadow rounded " style={{backgroundColor:'black'}}>
        <div className="col m-5 p-4">
        <img src={myImage} alt="Athila Pareeth img" style={{
                width: '350px',  
                height: '350px', 
                borderRadius: '50%', 
                objectFit: 'cover',boxShadow:'10% 10% 10% white' }}/> 
        </div>
        <div className="col m-5 p-5 " style={{textAlign:"justify"}}>
          <h2>About me!</h2>
          <p>Hello..I am a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I hold a Bachelor of Technology (BTech) degree in Computer Science and Engineering, where I honed my skills in various programming languages and development frameworks.
          With experience in the MERN stack (MongoDB, Express.js, React, and Node.js), I enjoy creating dynamic, user-friendly web applications that enhance user experiences.With a passion for continuous learning, I stay updated with the latest industry trends and technologies. I thrive in collaborative environments and enjoy tackling complex challenges to bring innovative ideas to life.
          </p>
          <p><h2>Skills</h2></p>
          <div className="row"></div>
          <p> <MDBBtn className='mx-3' outline rounded color='light'>
           C Programing
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           HTML
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           CSS
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           JavaScript
           </MDBBtn>
           </p>
           <div className="row">
            <p>
            <MDBBtn className='mx-3' outline rounded color='light'>
           Bootstrap
           </MDBBtn>
            <MDBBtn className='mx-3' outline rounded color='light'>
           Tailwind CSS
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           React JS
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           API
           </MDBBtn>
            </p>
           </div>
           <div className="row">
            <p>
            <MDBBtn className='mx-3' outline rounded color='light'>
           Sass
           </MDBBtn>
            <MDBBtn className='mx-3' outline rounded color='light'>
           SQL
           </MDBBtn>
            <MDBBtn className='mx-3' outline rounded color='light'>
           Mongodb
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           Excel
           </MDBBtn>
            </p>
           </div>
           <div className="row">
            <p><MDBBtn className='mx-3' outline rounded color='light'>
           Data Managment
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           Node JS
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
            Express js
           </MDBBtn>
           <MDBBtn className='mx-3' outline rounded color='light'>
           Git Express.js
           </MDBBtn>
           </p>
           </div>
        </div>
    </div>
</div>

    </div>
    
  )
}

export default Home