import { Link, usePage } from "@inertiajs/react";



export default function Sidebar(){
   const { url, component } = usePage();
     return(
       <>
<aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="/">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
     <li className="nav-heading">Pages</li>

      <li className="nav-item">
        
        {/* <a className="nav-link collapsed" > */}
        <i className="bi bi-person"></i>
        {/* <Link href='{route(userList)}'>Users</Link> */}
         
        <li>
              <Link
                href={"/users"}
                className={` ${
                  url == "/users" ? "active" : ""} `}>
                  User
                
              </Link>
            </li>
       </li>
       <li>
              <Link
                href={"/products"}
                className={` ${
                  url == "/products" ? "active" : ""} `}>
                  Product
                
              </Link>
            
       </li>
       <li>
              <Link
                href={"/admin/subscription"}
                className={` ${
                  url == "admin/subscription" ? "active" : ""} `}>
                  Subscription
                
              </Link>
            
       </li>
       <li>
              <Link
                href={"/admin/chanel"}
                className={` ${
                  url == "admin/chanel" ? "active" : ""} `}>
                  Chanel
                
              </Link>
            
       </li>
       


       
       
       <li>
              <Link
                href={"/coupons"}
                className={` ${
                  url == "/coupons" ? "active" : ""} `}>
                  Coupons
                
              </Link>
            
       </li>


       

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="bi bi-card-list"></i>
          <span>Register</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li> */}

    </ul>

  </aside>
  </>
     )
 }