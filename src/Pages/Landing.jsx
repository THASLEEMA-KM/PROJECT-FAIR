import React from 'react'
import { Link } from 'react-router-dom'
import landingimage from '../assets/landing1.png'
import ProjectCard from '../Components/ProjectCard'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center shadow rounded  w-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">`
                    <h1 style={{fontSize:'80px',letterSpacing:'5px'}}> <i className="fa-solid fa-folder-open me-2"></i>
                       PROJECT FAIR
                    </h1>
                    <p style={{textAlign:'justify'}}>
                        One top Destination for all Software Developement Projects. Where user can
                        add and manage their projects. As well asaccess all projects availabe in 
                        our website...What are you waiting for!!!
                    </p>
                        { 
                            sessionStorage.getItem("token")?
                                <Link to={'/dashboard'} className='btn btn-warning mt-3 fs-5'> Manage your Projects</Link>
                                :
                                <Link to={'/login'} className='btn btn-warning mt-3 fs-5'> Start To Explore</Link>

                        }                
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid' src={landingimage} alt="landing" />
                </div>
            </div>
        </div>
    </div> 
    <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee >
            <div className="d-flex">
                <div className="me-5">
                    <ProjectCard/>
                </div>
            </div>
        </marquee>
        <button className="btn btn-link mt-3">CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>
    <div className="d-flex align-items-center mt-5 flex-column">
        <h1>Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>      
                            <img width={'60px'} height={'60px'} src="https://st4.depositphotos.com/11953928/23915/v/450/depositphotos_239152692-stock-illustration-people-happy-face-man-icon.jpg" className='rounded-circle img-fluid' alt="" />
                            <span>Max Miller</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-regular fa-star-half-stroke text-warning"></i>
                                {/* <i className="fa-regular fa-star text-warning"></i> */}

                            </div>
                        <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>      
                            <img width={'60px'} height={'60px'} src="https://www.freeiconspng.com/uploads/female-icon-6.png" className='rounded-circle img-fluid' alt="" />
                            <span>Mariya</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-regular fa-star-half-stroke text-warning"></i>
                                {/* <i className="fa-regular fa-star text-warning"></i> */}

                            </div>
                        <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>      
                            <img width={'60px'} height={'60px'} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" className='rounded-circle img-fluid' alt="" />
                            <span>Alex</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-regular fa-star-half-stroke text-warning"></i>
                                {/* <i className="fa-regular fa-star text-warning"></i> */}

                            </div>
                        <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    </div>
    </>
  )
}

export default Landing
