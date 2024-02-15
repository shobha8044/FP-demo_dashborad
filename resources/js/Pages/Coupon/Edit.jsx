import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderLayout from "../Layout/Header"
import NavbarLayout from "../Layout/Navbar"
import SidebarLayout from  "../Layout/Sidebar"
import FooterLayout  from "../Layout/Footer"
import { Head, usePage, Link, router  } from '@inertiajs/react';


export default function Edit({ couponId }) {

  const [info, setInfo] = useState({
    name: "",
    discount: '',
    
  });

  const fetchData = () => {
    axios
      .get(`/get-coupon-edit/${couponId}`)
      .then((res) => {
        setInfo(res.data.coupon);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [couponId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault()
    router.post(`/coupon-update/${couponId}`,info)
  }
  

  return (
    <>
      <HeaderLayout/>
      <NavbarLayout />
      <SidebarLayout />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Coupon</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Coupon</li>
              <li className="breadcrumb-item active">Update</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edit Coupon</h5>
                  <form onSubmit={handleSubmit}>
                    {info && (
                      <>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">
                            Coupon Name
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              value={info.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Discount (%)</label>
                          <div className="col-sm-5">
                            <input
                              type="number"
                              id="discount"
                              name="discount"
                              className="form-control"
                              value={info.discount}
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
                            
                               <Link href={"/coupons"}> Back </Link>
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
