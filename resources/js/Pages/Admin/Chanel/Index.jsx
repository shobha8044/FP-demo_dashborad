import React from "react"
import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';
const baseUrl = 'http://127.0.0.1:8000/';
export default function Index({data}){
 

  
      return(
        <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />

        <main id="main" className="main">

            <div className="pagetitle">
            <h1>Chanel </h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Chanel</a></li>
              
                <li className="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section className="section">
            <div className="row">
                <div className="col-lg-12">
                 <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Chanel </h5>
                    <Link
                        href={"/admin/chanel-create"}
            >
                        Chanel Add
                    </Link>
                   
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Videos</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th> 
                             
                        </tr>
                        </thead>
                        <tbody>

                         { data && data.map( (item) => ( 
                        <tr>
                          <td>{item.name}</td> 
                          <td>
                            <div>
                             {item.channel_image && item.channel_image.length > 0 ? (
                                item.channel_image.map(image => (
                                  <div key={image.id}>
                                    <img src={image.channel_img_url} alt={image.description} width="100" height="100" />
                                    <br />
                                    <br />
                                  </div>
                                ))
                              ) : (
                                <div>
                                  No images available.
                                </div>
                              )}

                              </div>
                              </td>
                              <td>
                              <div>
                              {item.channel_video && item.channel_video.length > 0 ? (
                                 item.channel_video.map(video => (
                                <div key={video.id}>
                                  <video width="100" height="100"  controls>
                                    <source src={video.channel_video_url} type="video/mp4" />
                                  </video>
                                  <br />
                                  <br />
                                </div>
                                 ))
                                ) : (
                                  <div>
                                    No Videos  available.
                                  </div>
                                )}
                            
                            </div>
                          </td>
                          <td>{item.price}</td> 
                           <td className="border px-4 py-2">
                                <Link href={'/admin/channel-edit/'+item.uuid}>Edit</Link>
                          </td>
                            
                        </tr>
                        )) } 
                       
                        </tbody>
                    </table>
                   

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