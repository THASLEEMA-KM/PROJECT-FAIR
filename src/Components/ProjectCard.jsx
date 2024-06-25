import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import SERVER_URL from '../services/serverURL';

const ProjectCard = ({displayData}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn' >
        <Card.Img variant="top" height={'200px'} src={`${SERVER_URL}/uploads/${displayData?.projImage}`}/>
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${displayData?.projImage}`} alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h6><span className='fw-bolder'>Languages used : </span><span className='text-danger'>{displayData?.languages}</span></h6>
              <p style={{textAlign:'justify'}}>
                <span className='fw-bolder'>Project OverView :{displayData?.overview} 
                </span>
              </p>
            </div>
          </div>
          <div className="float-start mt-3">
            <a href={displayData?.github} target='_blank' className='btn btn-primary'> <i className="fa-brands fa-github"></i> </a>
            <a href={displayData?.website} target='_blank' className='btn btn-primary ms-2'> <i className="fa-solid fa-link"></i> </a>

          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
