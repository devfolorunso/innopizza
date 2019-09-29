 import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    class AdminApp extends Component {
      render () {
        return (
          <div id="wrapper">
          <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  
              <a className='sidebar-brand d-flex align-items-center justify-content-center' href='/'>
                  <div class="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                  </div>
                  <div class="sidebar-brand-text mx-3">Hi! Welcome</div>
              </a>
              <hr class="sidebar-divider my-0" />
  
              <li class="nav-item active">
                  <a className='nav-link' href='/'>
                      <i class="fas fa-fw fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                  </a>
              </li>
  
              <hr class="sidebar-divider" />
              <li class="nav-item">
                  <a className='nav-link' href='/admin/addpizza'>
                      <i class="fas fa-fw fa-plus"></i>
                      <span>Add Pizza</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a className='nav-link' href='/admin/category'>
                      <i class="fas fa-fw fa-list-alt"></i>
                      <span>Add category</span>
                  </a>
              </li>
  
              <hr class="sidebar-divider d-none d-md-block" />
  
              <div class="text-center d-none d-md-inline">
                  <button class="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
          </ul>
  
          <div id="content-wrapper" class="d-flex flex-column">
  
              <div id="content">
  
                  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
  
                      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                          <i class="fa fa-bars"></i>
                      </button>
  
  
                      <ul class="navbar-nav ml-auto">
  
  
                          <div class="topbar-divider d-none d-sm-block"></div>
  
                          <li class="nav-item dropdown no-arrow">
                              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">ADMIN</span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                  <div class="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                      Logout
                </a>
                              </div>
                          </li>
  
                      </ul>
  
                  </nav>
  
  
  
  
                  <div class="container-fluid">
  
                      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                      </div>
  
                      <hr width="100%" />
  
                      <div class="row mt-5 justify-content-center">
  
                          <div class="col-xl-4 col-md-6 mb-4">
                              <div class="card shadow h-100 py-2">
                                  <a href='/admin/category'>
                                      <div class="card-body">
                                          <div class="row no-gutters align-items-center">
                                              <div class="col mr-2">
                                                  <div class="text-s font-weight-bold text-primary text-uppercase mb-1">Add Pizza Category
                               </div>
                                              </div>
                                              <div class="col-auto">
                                                  <i class="fas fa-list fa-2x text-black"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                              </div>
                          </div>
  
                          <div class="col-xl-4 col-md-6 mb-4">
                              <div class="card shadow h-100 py-2">
                                  <a href='/admin/addpizza'>
                                      <div class="card-body">
                                          <div class="row no-gutters align-items-center">
                                              <div class="col mr-2">
                                                  <div class="text-s font-weight-bold text-primary text-uppercase mb-1">Add Pizza
                               </div>
                                              </div>
  
                                              <div class="col-auto">
                                                  <img
                                                  alt=""
                                                  src="/media/logo.png"
                                                  width="50"
                                                  height="50"
                                                  className="d-inline-block align-center"
                                                  />
                                              </div>
  
                                          </div>
  
                                      </div>
                                  </a>
                              </div>
  
                          </div>
                      </div> 
                      {/* ROW ENDS HERE */}
  
                  </div>
              </div>
          </div>
      </div>
        );
      }
    }
export default AdminApp;
    
if (document.getElementById('AdminApp')) {
  ReactDOM.render(<AdminApp />, document.getElementById('AdminApp'));
}