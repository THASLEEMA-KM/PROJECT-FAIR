import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadimage from '../assets/upload.png'
import SERVER_URL from '../services/serverURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../services/allAPI';
import { editResponseContext } from '../Contexts/ContextAPI';

const Edit = ({projects}) => {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [projectDetails,setProjectDetails] = useState({
    id:projects?._id,
    title:projects?.title,
    languages:projects?.languages,
    github:projects?.github,
    website:projects?.website,
    overview:projects?.overview,
    projImage:""
  })
  const [preview,setPreview] = useState("")
  const [imageFileStatus,setImageFileStatus] = useState(true)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id:projects?._id,
      title:projects?.title,
      languages:projects?.languages,
      github:projects?.github,
      website:projects?.website,
      overview:projects?.overview,
      projImage:""})
  }
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id:projects?._id,
      title:projects?.title,
      languages:projects?.languages,
      github:projects?.github,
      website:projects?.website,
      overview:projects?.overview,
      projImage:""})
  }

  useEffect(()=>{
    if(projectDetails.projImage.type =="image/png" || projectDetails.projImage.type =="image/jpg" || projectDetails.projImage.type =="image/jpeg")
      {
        setPreview(URL.createObjectURL(projectDetails.projImage))
        setImageFileStatus(true)

      }else{
        setImageFileStatus(false)
        setPreview("")
        setProjectDetails({...projectDetails,projImage:""})
      }
  },[projectDetails.projImage])

  const handleUpdateProject = async () =>
    {
      const {id,title,languages,github,website,overview,projImage} = projectDetails
      if(title && languages && github && website && overview)
        {
            // api call
            // reqBody - add items to formData
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("languages",languages)
            reqBody.append("overview",overview)
            reqBody.append("github",github)
            reqBody.append("website",website)
            preview?reqBody.append("projImage",projImage):reqBody.append("projImage",projects.projImage)

            const token = sessionStorage.getItem("token")
            if(token)
              {
                const reqHeader = {
                  "Content-Type" : preview?"multipart/form-data":"application/json",
                  "Authorization" : `Bearer ${token}`
                }
                // api call
                try {
                    const result = await editProjectAPI(id,reqBody,reqHeader)
                    console.log(result);
                    if(result.status==200)
                      {
                        handleClose()
                        // 
                        setEditResponse(result)
                      }else{
                        console.log(result.response);
                      }
                } catch (error) {
                  console.log(error);
                }
              }
        }
        else{
          toast.warning("Please fill the form completely")
        }
    }

  return (
    <>
            <button onClick={handleShow} className="btn text-warning"><i className="fa-solid fa-pen"></i></button> 

<Modal
  size='lg'
  centered
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Update Project Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projImage:e.target.files[0]})}/>
              <img height={'200px'} className='img-fluid' src={preview?preview:`${SERVER_URL}/uploads/${projects?.projImage }`} alt="" />
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
    <Button onClick={handleUpdateProject} variant="primary">Update</Button>
  </Modal.Footer>
</Modal>
<ToastContainer theme='colored' autoClose={3000} position="top-center"/>

    </>
  )
}

export default Edit
