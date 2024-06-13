import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadimage from '../assets/upload.png'
const Add = () => {

  const [preview,setPreview] = useState(uploadimage)

  const [projectDetails,setProjectDetails] = useState({
    title:"",
    languages:"",
    github:"",
    website:"",
    overview:"",
    projImage:""
  })
  console.log(projectDetails);
  const [imageFileStatus,setImageFileStatus] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(projectDetails.projImage.type=="image/jpg" || projectDetails.projImage.type=="image/png" || projectDetails.projImage.type=="image/jpeg" )
      {
        setImageFileStatus(true)
        setPreview(URL.createObjectURL(projectDetails.projImage))
      }else{
        setImageFileStatus(false)
        setProjectDetails({...projectDetails,projImage:""})
      }
  },
  [projectDetails.projImage])

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
              <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projImage:e.target.files[0]})}/>
              <img height={'200px'} className='img-fluid' src={preview} alt="" />
            </label>
            {
              !imageFileStatus &&
              <div className="text-warning fw-bolder my-2">
              *Upload only the following file types (jpeg,png,jpg)
              </div>
            }
          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" className='form-control' placeholder='Project Title' />
            </div>
            <div className="mb-2">
              <input value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" className='form-control' placeholder='Languages Used in Project' />
            </div>
            <div className="mb-2">
              <input value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" className='form-control' placeholder='Project Github Link' />
            </div>
            <div className="mb-2">
              <input value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" className='form-control' placeholder='Project Webiste Link' />
            </div>
          </div>
         </div>
         <div className='mt-2'>
          <input value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} type="text" className='form-control w-100' placeholder='Project OverView' />
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
