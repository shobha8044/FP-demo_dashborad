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
                            <th scope="col">videos</th>
                            {/* <th scope="col"> Number</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th> */}
                             
                        </tr>
                        </thead>
                        <tbody>

                         { data && data.map( (item) => ( 
                        <tr>
                            <td>{item.name}</td> 
                            <td><video width="320" height="240" autoplay>
                                 {/* <source src="item.channelVideo.channel_video_url" type="video/mp4"/> */}

                                 <source src={item.channelVideo.channel_video_url}  type="video/mp4"/> 

                                 {/* <td>{item.image && <img src={baseUrl+'storage/'+item.image} alt="Image not found" width="200px"/>}</td>  */}

                                   </video></td>
                            {/* <td>{item.product_number }</td> 
                            <td>{item.qty}</td> 
                            <td>{item.price}</td> 
                            <td>{item.image && <img src={baseUrl+'storage/images/'+item.image} alt="Image not found" width="200px"/>}</td> 
                            <td className="border px-4 py-2">
                            <Link href={'product-edit/' + item.slug}>Edit</Link>
                            </td>
                            <td className="border px-4 py-2">
                            <Link href={'product-delete/' + item.slug}>Delete</Link> </td> */}
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