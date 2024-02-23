import React from "react"
import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';

export default function Index(){
 

  
      return(
        <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />

        <main id="main" class="main">

            <div class="pagetitle">
            <h1>Chanel </h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Chanel</a></li>
              
                <li class="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section class="section">
            <div class="row">
                <div class="col-lg-12">
                 <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Chanel </h5>
                    <Link
                        href={"/admin/chanel-create"}
            >
                        Chanel Add
                    </Link>
                   
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Name</th>
                            {/* <th scope="col"> Number</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th> */}
                             
                        </tr>
                        </thead>
                        <tbody>
{/* 
                        { products && products.map( (item) => (
                        <tr>
                            <td>{item.product_name}</td> 
                            <td>{item.product_number }</td> 
                            <td>{item.qty}</td> 
                            <td>{item.price}</td> 
                            <td>{item.image && <img src={baseUrl+'storage/images/'+item.image} alt="Image not found" width="200px"/>}</td> 
                            <td className="border px-4 py-2">
                            <Link href={'product-edit/' + item.slug}>Edit</Link>
                            </td>
                            <td className="border px-4 py-2">
                            <Link href={'product-delete/' + item.slug}>Delete</Link>

                            </td>
                        </tr>
                        )) } */}
                       
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