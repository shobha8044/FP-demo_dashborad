import React from "react"
// import { Link, usePage } from "@inertiajs/react";
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';

export default function Index({products}){
    const { url, component } = usePage();
      return(
        <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />

        <main id="main" class="main">

            <div class="pagetitle">
            <h1>Product </h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Product</a></li>
              
                <li class="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section class="section">
            <div class="row">
                <div class="col-lg-12">
                 <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Product </h5>
                    <Link
                        href={"/product-create"}
            >
                        Product Add
                    </Link>
                   
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Number</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                             
                        </tr>
                        </thead>
                        <tbody>

                        { products && products.map( (item) => (
                        <tr>
                            <td>{item.product_name}</td> 
                            <td>{item.product_number }</td> 
                            <td>{item.qty}</td> 
                            <td>{item.price}</td> 
                            <td className="border px-4 py-2">
                            <Link href={'product-edit/' + item.id}>Edit</Link>

                            </td>
                            <td className="border px-4 py-2">
                            <Link href={'product-delete/' + item.id}>Delete</Link>

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