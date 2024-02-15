import React from "react"
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"

export default function Index({ users }){
  return(
    <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />

        <main id="main" class="main">

            <div class="pagetitle">
            <h1>User</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">User</a></li>
              
                <li class="breadcrumb-item active">Listing</li>
                </ol>
            </nav>
            </div>

            <section class="section">
            <div class="row">
                <div class="col-lg-12">

                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">User Detail</h5>

                   
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email Id </th>
                            <th scope="col">Status </th>
                        </tr>
                        </thead>
                        <tbody>
                        { users && users.map( (item) => (
                        <tr>
                            {/* <th scope="row">{item.id}</th> */}
                            <td>{item.name}</td> 
                            <td>{item.email}</td>
                            <td> {item.status === 1 ? 'Active' : 'Deactive'}</td>
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