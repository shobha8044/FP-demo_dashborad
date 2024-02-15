import React from "react"
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';

export default function Index({coupons}){
    const { url, component } = usePage();
      return(
        <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />

        <main id="main" class="main">

            <div class="pagetitle">
            <h1>Coupons </h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Coupon</a></li>
              
                <li class="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section class="section">
            <div class="row">
                <div class="col-lg-12">
                 <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Coupon </h5>
                    <Link
                        href={"/coupon-create"}
                      >
                        Coupon Add
                    </Link>
                   
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Coupon Name</th>
                            <th scope="col">Code</th>
                            <th scope="col">Discount (%)</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        { coupons && coupons.map( (item) => (
                        <tr>
                            <td>{item.name}</td> 
                            <td>{item.code }</td> 
                            <td>{item.discount}</td> 
                           
                            <td className="border px-4 py-2">
                                <Link href={'coupons-edit/' + item.id}>Edit</Link>
                            </td>
                            <td className="border px-4 py-2">
                              <Link href={'coupon-delete/' + item.id}>Delete</Link> 
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