import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';


export default function EditProduct({ productId }) {

  const baseUrl = 'http://127.0.0.1:8000/';

  const [info, setInfo] = useState({
    product_name: "",
    qty: 0,
    price: 0
  });

  const fetchData = () => {
    axios
      .get(`/get-product-edit/${productId}`)
      .then((res) => {
        setInfo(res.data.product);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault()
    router.post(`/product-update/${productId}`,info)
  }
  

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
                    {info && (
                      <>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">
                            Product Name
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              id="product_name"
                              name="product_name"
                              className="form-control"
                              value={info.product_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Qty</label>
                          <div className="col-sm-5">
                            <input
                              type="number"
                              id="qty"
                              name="qty"
                              className="form-control"
                              value={info.qty}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row mb-6">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Price
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="number"
                              id="price"
                              name="price"
                              className="form-control"
                              value={info.price}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">
                              Update
                            </button>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col-sm-10">
                            
                               <Link href={"/products"}> Back </Link>
                          </div>
                        </div> 
                      </>
                    )}
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
