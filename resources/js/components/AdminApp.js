import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class AdminApp extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a className='sidebar-brand d-flex align-items-center justify-content-center' href='/'>
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Hi! Welcome</div>
                    </a>
                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <a className='nav-link' href='/'>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <hr className="sidebar-divider" />
                    <li className="nav-item">
                        <a className='nav-link' href='/admin/addpizza'>
                            <i class="fas fa-fw fa-plus"></i>
                            <span>Add Pizza</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='/admin/category'>
                            <i className="fas fa-fw fa-list-alt"></i>
                            <span>Add category</span>
                        </a>
                    </li>

                    <hr className="sidebar-divider d-none d-md-block" />

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>


                            <ul className="navbar-nav ml-auto">


                                <div className="topbar-divider d-none d-sm-block"></div>

                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">ADMIN</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>




                        <div className="container-fluid">

                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div>

                            <hr width="100%" />

                            <div className="row mt-5 justify-content-center">

                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card shadow h-100 py-2">
                                        <a href='/admin/category'>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-s font-weight-bold text-primary text-uppercase mb-1">Add Pizza Category
                               </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-list fa-2x text-black"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card shadow h-100 py-2">
                                        <a href='/admin/addpizza'>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-s font-weight-bold text-primary text-uppercase mb-1">Add Pizza
                               </div>
                                                    </div>

                                                    <div className="col-auto">
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