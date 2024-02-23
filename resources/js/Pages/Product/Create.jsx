import React from "react"
import { useForm, Link} from '@inertiajs/react'

import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { useState } from 'react'

export default function CreateProduct() {
  
  const { data, setData, post } = useForm({
    product_name: null,
    qty: null,
    price: null,
    image: null,
});

const handleSubmit = (e) => {
    e.preventDefault();
    post('/product-store', data, {
        onSuccess: () => {
            console.log('Success');
        },
        onError: () => {
            console.log('Error');
        },
    });
};
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
                        <label className="col-sm-2 col-form-label"> Name</label>
                        <div class="col-sm-5">
                          <input type="text" id="product_name" name="product_name" className="form-control"  value={data.product_name} onChange={e => setData('product_name', e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label"> QTY</label>
                        <div class="col-sm-5">
                          <input type="number" id="qty" name="qty" className="form-control"  value={data.qty} onChange={e => setData('qty', e.target.value)} />
                         </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label"> Price</label>
                        <div class="col-sm-5">
                          <input type="number" id="price" name="price" className="form-control"  value={data.price} onChange={e => setData('price', e.target.value)} />
                         </div>
                    </div>
                    <div class="row mb-3">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-5">
                        <input type="file" name="image" id="image" className="form-control"  onChange={e => setData('image', e.target.files[0])} />
                         </div>
                    </div>
                    <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                          </div>
                        </div>
                  
                 
                  <Link href={"/products"}> Back </Link>
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
