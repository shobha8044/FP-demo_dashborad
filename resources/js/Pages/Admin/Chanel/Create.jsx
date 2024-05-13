import React from "react";
import { useForm, Link } from "@inertiajs/react";
import HeaderLayout from "../../Layout/Header";
import NavbarLayout from "../../Layout/Navbar";
import SidebarLayout from "../../Layout/Sidebar";
import FooterLayout from "../../Layout/Footer";
import { useState } from "react";

export default function Create() {
  
    const { data, setData, post, errors } = useForm({
      
    name: null,
    description: null,
    price: null,
    images: [],
    image_name: null,
    image_description: null,
    channel_videos: [],
    video_name: null,
    video_description: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/admin/chanel-store", data, {
      onSuccess: () => {
        console.log("Success");
      },
      onError: (errors) => {
         console.log("Error", errors);
         
      },
    });
<<<<<<< HEAD
  };

  function handleFileUpload(event) {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setData("images", fileArray);
  }

  function handleVideoUpload(event) {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setData("channel_videos", fileArray);
  }
=======
};
function handleFileUpload(event) {
  const files = event.target.files;
  const fileArray = Array.from(files);
  const fileNames = fileArray.map((file) => file.name);
  setData("images", fileArray); // Store array of file objects
}
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094

  return (
    <>
      <HeaderLayout />
      <NavbarLayout />
      <SidebarLayout />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Chanel</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Chanel</li>
              <li className="breadcrumb-item active">Create</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Create Chanel</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label"> Name</label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          value={data.name}
                          onChange={(e) => setData("name", e.target.value)}
                         
                        />
                         {errors.name && (
                            <div className="text-danger">Channels name field is required.</div>
                          )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Description</label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          id="description"
                          name="description"
                          className="form-control"
                          value={data.description}
                          onChange={(e) => setData("description", e.target.value)}
                        />
                         {errors.description && (
                            <div className="text-danger">Description name field is required.</div>
                          )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label"> Price</label>
                      <div className="col-sm-5">
                        <input
                          type="number"
                          id="price"
                          name="price"
                          className="form-control"
                          value={data.price}
                          onChange={(e) => setData("price", e.target.value)}
                        />
                        {errors.price && (
                            <div className="text-danger">{errors.price}</div>
                          )}
                      </div>
                    </div>
<<<<<<< HEAD
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
                         {errors.images && (
                            <div className="text-danger">{errors.images}</div>
                          )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Image Name</label>
                      <div class="col-sm-5">
                        <input
                          type="text"
                          name="image_name"
                          id="image_name"
                          className="form-control"
                          onChange={(e) => setData("image_name", e.target.value)}
                        />
                        {errors.image_name && (
                            <div className="text-danger">{errors.image_name}</div>
                          )}
                      </div>
=======
                  

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
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Image Description</label>
                      <div class="col-sm-5">
                        <input
                          type="text"
                          name="image_description"
                          id="image_description"
                          className="form-control"
                          onChange={(e) => setData("image_description", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
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
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Video Name</label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          name="video_name"
                          id="video_name"
                          className="form-control"
                          onChange={(e) => setData("video_name", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Video Description</label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          name="video_description"
                          id="video_description"
                          className="form-control"
                          onChange={(e) => setData("video_description", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Add
                        </button>
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
