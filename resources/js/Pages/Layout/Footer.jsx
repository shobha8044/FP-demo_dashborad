import React from "react";
const baseUrl = 'http://127.0.0.1:8000/';

 export default function Footer() {
    return (
        <> 
    <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
        
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      <script src={baseUrl +'admin/assets/vendor/apexcharts/apexcharts.min.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/chart.js/chart.umd.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/echarts/echarts.min.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/quill/quill.min.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/simple-datatables/simple-datatables.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/tinymce/tinymce.min.js'}></script>
      <script src={baseUrl +'admin/assets/vendor/php-email-form/validate.js'}></script>

      <script src={baseUrl +'admin/assets/js/main.js'}></script>

      </>
  );
}  



