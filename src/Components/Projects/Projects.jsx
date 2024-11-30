import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage,
    MDBCardTitle
  } from 'mdb-react-ui-kit';
function Projects() {
  return (
    <div style={{backgroundColor:'black'}}>
<h1 className=' p-4' style={{ textAlign:'center',color:'white'}}>Projects</h1>

    <div className="row m-3 p-4">
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg' alt='...' position='top' style={{height:"250px"}} />
      <MDBCardBody >
      <MDBCardTitle style={{color:'goldenrod'}}>
          Zenora Delights-Website for Food
        </MDBCardTitle>
        <MDBCardText>
        Zenora Delights is a vibrant food ordering website offering a wide variety of delectable dishes, designed with a clean interface and seamless user experience.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2023/12/31/15/42/living-room-8480223_640.jpg' alt='...' position='top' style={{height:"250px"}}/>
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
      AUORA-Website for Furniture
        </MDBCardTitle>
        <MDBCardText>
        Aurora is a sleek and modern furniture website designed to showcase a wide range of stylish and functional furniture pieces with a user-friendly interface.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_640.jpg' alt='...' position='top' />
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
      NIKE-Website for shoes
        </MDBCardTitle>
        <MDBCardText>
        Nike is a renowned global brand website dedicated to showcasing premium footwear collections, offering a sleek and immersive shopping experience for shoe enthusiasts.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>

    <div className="row m-3 p-4">
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_1280.jpg' alt='...' position='top' />
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
        Event managment website
        </MDBCardTitle>
        <MDBCardText>
        The Event Management website provides a seamless platform for planning, organizing, and managing events with an intuitive interface and efficient features.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2017/09/04/09/37/cinema-strip-2713352_640.jpg' alt='...' position='top' />
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
        Movie finder
        </MDBCardTitle>
        <MDBCardText>
        Movie Finder is a user-friendly website that allows you to search for movies and instantly displays detailed information about them, including ratings, cast, and synopsis.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2024/05/20/16/57/ai-generated-8775790_640.png' alt='...' position='top' style={{height:"300px"}}/>
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
      AUORA -Website for Accessories
        </MDBCardTitle>
        <MDBCardText>
        Aura Ornaments offers a stunning collection of rose gold items, blending elegance and sophistication for a timeless accessory.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
    <div className="row m-3 p-4">
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://i.pinimg.com/474x/53/f6/69/53f6695630097aa8c5e9a01f4ae15caa.jpg' alt='...' position='top' style={{height:"250px"}} />
      <MDBCardBody >
      <MDBCardTitle style={{color:'goldenrod'}}>
      country-fetching application
        </MDBCardTitle>
        <MDBCardText>
        Built with HTML, CSS, Bootstrap, and JavaScript, this tool pulls detailed information about countries through APIs, making data exploration seamless and engaging.         </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://i.pinimg.com/236x/d0/8d/2a/d08d2a7c19f2e2844bc3916d2924976d.jpg' alt='...' position='top' style={{height:"250px"}}/>
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
      Simple Online Banking Website
        </MDBCardTitle>
        <MDBCardText>
        online banking website equipped with essential features such as user authentication, secure transactions, and an intuitive design. Utilizing HTML, CSS, Bootstrap, and JavaScript.</MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col p-3 m-3">
        <MDBCard>
      <MDBCardImage src='https://i.pinimg.com/236x/00/61/ae/0061ae6698e88cb1f4ec2dd12127ac96.jpg' alt='...' position='top' style={{height:"250px"}}/>
      <MDBCardBody>
      <MDBCardTitle style={{color:'goldenrod'}}>
      Calculator
        </MDBCardTitle>
        <MDBCardText>
        a simple calculator built using JavaScript and HTML. This project showcases responsive design with Bootstrap, ensuring a seamless experience across devices.        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
</div>
  )
}

export default Projects