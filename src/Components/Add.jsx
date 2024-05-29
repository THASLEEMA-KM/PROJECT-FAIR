import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadimage from '../assets/upload.png'
const Add = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary"> <i className="fa-solid fa-plus me-2"></i> New Projects </button> 

      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input type="file" style={{display:'none'}} />
              <img height={'200px'} className='img-fluid' src={uploadimage} alt="" />
            </label>
          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project Title' />
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Languages Used in Project' />
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project Github Link' />
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project Webiste Link' />
            </div>
          </div>
         </div>
         <div className='mt-2'>
          <input type="text" className='form-control w-100' placeholder='Project OverView' />
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
