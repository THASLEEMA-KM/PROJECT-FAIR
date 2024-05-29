import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn' >
        <Card.Img variant="top" height={'200px'} src=""/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>Project name</h3>
              <h6><span className='fw-bolder'>Languages used : </span><span className='text-danger'>React</span></h6>
              <p style={{textAlign:'justify'}}>
                <span className='fw-bolder'>Project OverView : Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </span>
              </p>
            </div>
          </div>
          <div className="float-start">
            <a href="" target='_blank' className='btn btn-primary'> <i className="fa-brands fa-github"></i> </a>
            <a href="" target='_blank' className='btn btn-primary ms-2'> <i className="fa-solid fa-link"></i> </a>

          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
