import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';



export default function Edit( {uId} ){


const [info, setInfo] = useState({
    name: null,
    description: null,
    price: null,
    images: [],
    image_name: null,
    image_description: null,
    channel_videos: [],
    video_name: null,
    video_description: null,
 
})



const fetchData = () => {
    axios
      .get(`/admin/get-channel-edit/${uId}`)
      .then((res) => {
        setInfo(prevInfo => ({
          channelData: res.data.channelData, 
          channelImage: res.data.channelImage, 
          channelVideo: res.data.channelVideo, 
        }));
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

useEffect(() => {
  fetchData();
}, [uId]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setInfo((prevInfo) => ({
    ...prevInfo,
    [name]: value
  }));
};

function handleFileUpload(event) {
  const files = event.target.files;
  const fileArray = Array.from(files);
  setInfo((prevInfo) => ({
    ...prevInfo,
    images: fileArray
  }));
}

function handleVideoUpload(event) {
const files = event.target.files;
const fileArray = Array.from(files);
setData("channel_videos", fileArray);
}

function handleSubmit(e) {
  e.preventDefault()
  router.post(`/admin/channel-update/${uId}`,info)
}


  return(
    <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Update Channel</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item">Channel</li>
                <li className="breadcrumb-item active">update</li>
              </ol>
            </nav>
          </div>  
            <section className="section">
              <div className="row">
                <div className="col-lg-12">

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Update Channel</h5>
                      <form  onSubmit={handleSubmit}>

                         <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Channel Name</label>
                            <div className="col-sm-5">
                                <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={info.channelData && info.channelData.name}  
                                 onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label  className="col-sm-2 col-form-label" >Channel description</label>
                            <div class="col-sm-5">
                            <input type="text" id="description"  name="description" className="form-control" value={info.channelData && info.channelData.description}   onChange={handleChange}  />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label">Channel price</label>
                            <div class="col-sm-5">
                            <input type="number" id="price" name="price" className="form-control"  value={info.channelData && info.channelData.price}  onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Images</label>
                                <div className="col-sm-5">
                                <input
                                type="file"
                                name="images[]"
                                id="images"
                                multiple
                                className="form-control"
                                onChange={(e) => handleFileUpload(e)}
                                />   
                                {/* {errors.images && (
                                    <div className="text-danger">{errors.images}</div>
                                )}  */}
                             </div>
                        </div>
  

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Image Name</label>
                            <div className="col-sm-5">
                                <input
                                    type="text"
                                    name="image_name"
                                    id="image_name"
                                    className="form-control"
                                    value={info.channelImage[0] && info.channelImage[0].name}
                                    onChange={handleChange}
                                /> 
                                {/* {errors.image_name && (
                                    <div className="text-danger">{errors.image_name}</div>
                                )} */}
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Image Description</label>
                            <div class="col-sm-5">
                                <input
                                type="text"
                                name="image_description"
                                id="image_description"
                                className="form-control"
                                value={info.channelImage[0] && info.channelImage[0].description} 
                                onChange={(e) => setData("image_description", e.target.value)}
                                />
                            </div>
                        </div> */}
                       {/* <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Chanel Video </label>
                            <div className="col-sm-5">
                                <input
                                type="file"
                                name="channel_videos[]"
                                multiple
                                id="channel_videos"
                                className="form-control"
                                onChange={(e) => handleVideoUpload(e)}
                                />
                            </div>
                        </div> */}
                        {/* <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Video Name</label>
                        <div className="col-sm-5">
                            <input
                            type="text"
                            name="video_name"
                            id="video_name"
                            className="form-control"
                            value={info.channelVideo[0] && info.channelVideo[0].name}
                            onChange={(e) => handleVideoUpload(e)}
                            />
                        </div>
                        </div> */}
                    {/* <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Video Description</label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          name="video_description"
                          id="video_description"
                          className="form-control"
                          value={info.channelVideo[0] && info.channelVideo[0].description}
                          onChange={(e) => handleVideoUpload(e)}
                        />
                      </div>
                    </div>  */}
                   
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Update</button>
                          </div>
                        </div> 
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            
                               <Link href={"/admin/chanel"}> Back </Link>
                          </div>
                        </div> 

                      </form>

                    </div>
                  </div>

                </div>
              </div>
            </section>
        </main>
        <FooterLayout />
    </>

    
  );
}