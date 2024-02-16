import React from "react"
import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';

export default function Index({data}){
  return(
    <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />
        <main id="main" class="main">

            <div class="pagetitle">
            <h1>Subscription</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Subscription</a></li>
                <li class="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section class="section">
            <div class="row">
                <div class="col-lg-12">
                
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Subscription Plain</h5>
                    <Link
                        href={"/admin/subscription-create"}
                    >
                        Subscription Add
                    </Link>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Subscription Plain</th>
                            <th scope="col">Subscription Price </th>
                            <th scope="col">Subscription Time </th>
                            {/* <th scope="col">Chan </th> */}
                            {/* <th scope="col">Subscription Time </th> */}
                        </tr>
                        </thead>
                        <tbody>
                        { data && data.map( (item) => (
                        <tr>
                           
                            <td>{item.subscription_pain}</td> 
                            <td>{item.price}</td>
                            <td>{item.time}/{item.time_type} </td>

                            
                            {/* <td> {item.status === 1 ? 'Active' : 'Deactive'}</td> */}
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