import React from "react"
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { useState } from 'react'
import { Head, usePage, Link, router  } from '@inertiajs/react';


export default function Create(){


const [values, setValues] = useState({
  name: "",
  discount: "",
 
})

function handleChange(e) {
  const key = e.target.id;
  const value = e.target.value
  setValues(values => ({
      ...values,
      [key]: value,
  }))
}


function handleSubmit(e) {
  e.preventDefault()
  router.post('/coupon-store', values)
}


  return(
    <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />
        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Add Coupon </h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">Coupon</li>
                <li class="breadcrumb-item active">Create</li>
              </ol>
            </nav>
          </div>  
            <section class="section">
              <div class="row">
                <div class="col-lg-12">

                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Create Coupon </h5>
                      <form  onSubmit={handleSubmit}>
                        <div class="row mb-3">
                          <label  className="col-sm-2 col-form-label">Coupon Name</label>
                          <div class="col-sm-5">
                            <input  type="text"  id="name" name="name"  className="form-control" value={values.name} onChange={handleChange} />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label">Discount (%)</label>
                          <div class="col-sm-5">
                            <input type="number" id="discount" name="discount" className="form-control" value={values.discount} onChange={handleChange} />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                          </div>
                        </div> 
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            
                               <Link href={"/coupons"}> Back </Link>
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