<template>
  <nav class="navbar navbar-expand-lg  with-gradient navbar-light " id="main-navbar" style="z-index: 99999">
    <div class="container px-mobile-fix">
      <button type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler no-shadow border-0">
        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="h-6 w-6">
          <path d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <a href="/" aria-current="page" class="navbar-brand nuxt-link-exact-active nuxt-link-active">
        <img src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg" width="145px" alt="Company Logo">
      </a>
      <a href="/" class="navbar-toggler no-shadow border-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      </a>
      <div id="navbarSupportedContent" class="collapse navbar-collapse mt-4 mt-lg-0">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="/" class="nav-link fw-medium nuxt-link-exact-active nuxt-link-active">Beranda</a>
          </li>
          <li class="nav-item">
            <a href="https://kiriminaja.com/blog" class="nav-link fw-medium">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://kiriminaja.com/kabar" class="nav-link fw-medium" aria-current="page">Kabar</a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" id="layanan" role="button" aria-expanded="false" class="nav-link fw-medium dropdown-toggle">Layanan</a>
            <div data-bind="#layanan" class="dropdown-menu">
              <a href="https://kiriminaja.com/praktisin" class="dropdown-item dropdown-item-x">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon d-none d-lg-inline">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                <span class="d-block">Manajemen Order</span>
                <span class="text-opacity-50 text-dark d-none d-lg-inline">Platform management order dengan multi ekspedisi</span>
              </a>
              <a href="https://kiriminaja.com/api-integration" class="dropdown-item dropdown-item-x">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon d-none d-lg-inline">
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                    <line x1="6" y1="9" x2="6" y2="21"></line>
                </svg>
                <span class="d-block">Integrasi API</span>
                <span class="text-opacity-50 text-dark d-none d-lg-inline">Hubungkan toko online mu dengan kami</span>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a href="https://kiriminaja.com/cekaja" class="nav-link fw-medium" aria-current="page">Cek Ongkir</a>
          </li>
          <li class="nav-item">
            <a href="https://kiriminaja.com/tracking" class="nav-link fw-medium" aria-current="page">Lacak</a>
          </li>
          <li class="nav-item">
            <div class="vertical-spacer"></div>
          </li>
          <li class="nav-item me-lg-3">
            <a href="https://dashboard.kiriminaja.com/v3/mbr20/register" class="nav-link fw-medium">Daftar</a>
          </li>
          <li class="nav-item d-lg-flex align-items-center" id="try-now">
            <a href="https://dashboard.kiriminaja.com/v3/mbr20/login" class="btn full-radius py-2 btn-primary text-white">Masuk</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
