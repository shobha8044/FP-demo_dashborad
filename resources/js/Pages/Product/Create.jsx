import React from "react"
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { useState } from 'react'
import { Head, usePage, Link, router  } from '@inertiajs/react';
import axios from 'axios';

export default function CreateProduct() {
  const [values, setValues] = useState({
    product_name: "",
    qty: "",
    price: "",
    image: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Create a new FormData object and append the form fields
    const formData = new FormData();
    formData.append('product_name', values.product_name);
    formData.append('qty', values.qty);
    formData.append('price', values.price);
    formData.append('image', values.image);

    // Send the FormData object with axios or fetch
    try {
      const response = await axios.post('/product-store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Redirect to the product list page on successful submission
      router.push('/products');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
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
                  <form onSubmit={handleSubmit}>
                    <div class="row mb-3">
                      <label className="col-sm-2 col-form-label">Product Name</label>
                      <div class="col-sm-5">
                        <input type="text" id="product_name" name="product_name" className="form-control" value={values.product_name} onChange={handleChange} />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Qty</label>
                      <div class="col-sm-5">
                        <input type="number" id="qty" name="qty" className="form-control" value={values.qty} onChange={handleChange} />
                      </div>
                    </div>
                    <div class="row mb-6">
                      <label className="col-sm-2 col-form-label" >Price</label>
                      <div class="col-sm-5">
                        <input type="number" id="price"  name="price" className="form-control" value={values.price} onChange={handleChange}  />
                      </div>
                    </div>
                    <div>
                      <label class="row mb-6">Image</label>
                      <div className="col-sm-5">
                        <input
                          type="file"
                          name="image"
                          className="form-control" id="image" value={values.image} onChange={handleChange}  />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Add</button>
                      </div>
                    </div> 
                    <div class="row mb-3">
                      <div class="col-sm-10">
                        <Link href={"/products"}> Back </Link>
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
