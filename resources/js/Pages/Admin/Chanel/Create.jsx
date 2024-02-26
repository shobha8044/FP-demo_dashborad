import React from "react"
import { useForm, Link} from '@inertiajs/react'

import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"
import { useState } from 'react'

export default function CreateProduct() {
  
  const { data, setData, post } = useForm({
    name: null,
    description: null,
    price: null,
    images: [],
    image_name: null,
    image_description: null,
    channel_video: null,
    video_name: null,
    video_description: null,

    
});

const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/chanel-store', data, {
        onSuccess: () => {
            console.log('Success');
        },
        onError: () => {
            console.log('Error');
        },
    });
};
function handleFileUpload(event) {
  const files = event.target.files;
  const fileArray = Array.from(files);
  const fileNames = fileArray.map((file) => file.name);
  setData("images", fileArray); // Store array of file objects
}

  return (
    <>
      <HeaderLayout/>
      <NavbarLayout />
      <SidebarLayout />
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Add Chanel</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item">Chanel</li>
              <li class="breadcrumb-item active">Create</li>
            </ol>
          </nav>
        </div>  
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Create Chanel</h5>
                  <form onSubmit={handleSubmit}>
                   <div class="row mb-3">
                        <label className="col-sm-2 col-form-label"> Name</label>
                        <div class="col-sm-5">
                          <input type="text" id="name" name="name" className="form-control"  value={data.nmae} onChange={e => setData('name', e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-5">
                          <input type="text" id="description" name="description" className="form-control"  value={data.description} onChange={e => setData('description', e.target.value)} />
                         </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label"> Price</label>
                        <div class="col-sm-5">
                          <input type="number" id="price" name="price" className="form-control"  value={data.price} onChange={e => setData('price', e.target.value)} />
                         </div>
                    </div>
                  

                    <div class="row mb-3">
                      <label className="col-sm-2 col-form-label">Images</label>
                      <div class="col-sm-5">
                        <input
                          type="file"
                          name="images"
                          id="images"
                          multiple // Enable multiple file selection
                          className="form-control"
                          onChange={(e) => handleFileUpload(e)}
                        />
                      </div>
                      </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Image Name</label>
                        <div class="col-sm-5">
                        <input type="text" name="image_name" id="image_name" className="form-control"  onChange={e => setData('image_name', e.target.value)} />
                         </div>
                    </div>

                   
                   
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Image Description</label>
                        <div class="col-sm-5">
                        <input type="text" name="image_description" id="image_description" className="form-control"  onChange={e => setData('image_description', e.target.value)} />
                         </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Chanel Video </label>
                        <div class="col-sm-5">
                        <input type="file" name="channel_video" id="channel_video" className="form-control"  onChange={e => setData('channel_video', e.target.files[0])} />
                         </div>
                    </div>
                    
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Video Name</label>
                        <div class="col-sm-5">
                        <input type="text" name="video_name" id="video_name" className="form-control"  onChange={e => setData('video_name', e.target.value)} />
                         </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Video Description</label>
                        <div class="col-sm-5">
                        <input type="text" name="video_description" id="video_description" className="form-control"  onChange={e => setData('video_description', e.target.value)} />
                         </div>
                    </div>
                  
                    <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                          </div>
                    </div>
                  <Link href={"/admin/chanel"}> Back </Link>
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
