

import React, { useEffect } from "react";
import { useForm } from '@inertiajs/react'
import axios from "axios";
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { Link } from '@inertiajs/react'


export default function EditProduct({ slug }) {

  
  const { data, setData, post } = useForm({
    product_name: null,
    qty: null,
    price: null,
    image: null,
  });

  const fetchData = () => {
    axios
      .get(`/get-product-edit/${slug}`)
      .then((res) => {
        setData(res.data.product);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/product-update/${slug}`, data, {
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
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Product</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Product</li>
              <li className="breadcrumb-item active">Update</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edit Product</h5>
                  <form onSubmit={handleSubmit}>
                   <div class="row mb-3">
                        <label className="col-sm-2 col-form-label"> Name</label>
                        <div class="col-sm-5">
                          <input
                                type="text"
                                id="product_name"
                                name="product_name"
                                className="form-control"
                                value={data.product_name || ""}
                                onChange={(e) => setData("product_name", e.target.value)}
                              />
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
                        <input type="file" name="image" id="image" className="form-control" onChange={(e) => setData('image', e.target.files[0])} />
                      </div>
                    </div>
                    <div class="row mb-3">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Update</button>
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
