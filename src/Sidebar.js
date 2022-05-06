import React  from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {

  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
        <i class="fa-solid fa-face-laugh-wink"></i>        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </div>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item ">
        <Link class="nav-link" to={'/dashboard'}>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Addons</div>

      <li class="nav-item">
        <Link class="nav-link" to={'/users'}>
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Student</span>
        </Link>
      </li>

      <li class="nav-item">
      <Link class="nav-link" to={'/Teacherdetails'}>
          <i class="fas fa-fw fa-table"></i>
          <span>Teachers</span>
        </Link>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />

      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div class="sidebar-card d-none d-lg-flex">
       
        <p class="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          class="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}

export default Sidebar;