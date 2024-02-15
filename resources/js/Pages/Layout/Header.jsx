import React from "react"

const baseUrl = 'http://127.0.0.1:8000/';
export default function Header() {
    return (
        <>
           <head>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    
            <title>Admin</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />
    
            <link href={baseUrl + 'admin/assets/img/favicon.png'} rel="icon" />
            <link href={baseUrl + 'admin/assets/img/apple-touch-icon.png'} rel="apple-touch-icon" />
    
            <link href="https://fonts.gstatic.com" rel="preconnect" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
    
            <link href={baseUrl + 'admin/assets/vendor/bootstrap/css/bootstrap.min.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/bootstrap-icons/bootstrap-icons.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/boxicons/css/boxicons.min.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/quill/quill.snow.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/quill/quill.bubble.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/remixicon/remixicon.css'} rel="stylesheet" />
            <link href={baseUrl + 'admin/assets/vendor/simple-datatables/style.css'} rel="stylesheet" />
    
            <link href={baseUrl + 'admin/assets/css/style.css'} rel="stylesheet" />
        </head>
        </>
    );
  }