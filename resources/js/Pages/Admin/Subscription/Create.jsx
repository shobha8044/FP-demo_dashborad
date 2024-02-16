import React from "react"
import HeaderLayout from "../../Layout/Header"
import NavbarLayout from "../../Layout/Navbar"
import SidebarLayout from  "../../Layout/Sidebar"
import FooterLayout  from "../../Layout/Footer"

import { useState } from 'react'
import { Head, usePage, Link, router  } from '@inertiajs/react';


export default function Create(){


const [values, setValues] = useState({
  subscription_pain: "",
  price: "",
  time: "",
  time_type: "",
  product: "",
  channel : "",
 
  
 
})

function handleChange(e) {
  const { id, value, type, checked } = e.target;
  const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
  setValues(prevValues => ({
    ...prevValues,
    [id]: newValue,
  }));
}


function handleSubmit(e) {
  e.preventDefault()
  router.post('/admin/subscription-store', values)
}


  return(
    <>
        <HeaderLayout/>
        <NavbarLayout />
        <SidebarLayout />
        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Add Product</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">Product</li>
                <li class="breadcrumb-item active">Create</li>
              </ol>
            </nav>
          </div>  
            <section class="section">
              <div class="row">
                <div class="col-lg-12">

                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Create Product</h5>
                      <form  onSubmit={handleSubmit}>
                        <div class="row mb-3">
                          <label  className="col-sm-2 col-form-label">Subscription Pain</label>
                          <div class="col-sm-5">
                            <input  type="text"  id="subscription_pain" name="subscription_pain"  className="form-control" value={values.subscription_pain} onChange={handleChange} />
                          </div>
                        </div>
                       
                        <div className="row mb-6">
                          <label  className="col-sm-2 col-form-label" >Subscription Price</label>
                          <div class="col-sm-5">
                            <input type="number" id="price"  name="price" className="form-control" value={values.price} onChange={handleChange}  />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label">Subscription Time</label>
                          <div class="col-sm-5">
                            <input type="number" id="time" name="time" className="form-control" value={values.time} onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-sm-2 col-form-label">Subscription Time Type</label>
                            <div className="col-sm-5">
                              <select className="form-select" name="time_type" id="time_type" onChange={handleChange}>
                                <option value="" disabled selected>Select Type</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                              </select>
                            </div>
                          </div>
                        <div className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Benefect
                      </legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="channel"
                            id="channel"
                            checked={values.channel === 1}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">Channel</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="product"
                            id="product"
                            checked={values.product === 1}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">Product</label>
                        </div>
                      </div>
                    </div>
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                          </div>
                        </div> 
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            
                               <Link href={"/admin/subscription"}> Back </Link>
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