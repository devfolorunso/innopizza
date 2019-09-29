import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class AddCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            errors: [],
            categories: []
        }
        this.OnChange = this.OnChange.bind(this)
        this.handleCreateNewCategory = this.handleCreateNewCategory.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    OnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCreateNewCategory(event) {
        event.preventDefault()


        const category = {
            title: this.state.title,
        }
        axios.post('/api/admin/category', category, )
            .then(response => {
                // redirect to the homepage

            })
            .catch(error => {
                this.setState({
                    errors: error.response.errors
                })
            })


    }

    handleSubmit(event) {
        event.preventDefault();
      ;
        // axios.delete(`api/admin/category${category.id}`);
      }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }
    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }

    }

    componentDidMount() {
        axios.get('/api/admin/categories')
            .then(res => this.setState({ categories: res.data }))
        }

    render() {
        const { categories } = this.state

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
                        <a className='nav-link' href='/admin'>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <hr className="sidebar-divider" />
                    <li className="nav-item">
                        <a className='nav-link' href='/admin/addpizza'>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Add Pizza</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='/admin/category'>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
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
                                        <img alt=""
                                            src="/media/logo.png"
                                            width="50"
                                            height="50"
                                            className="d-inline-block align-center"
                                        />
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




                        <div className="container">

                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Add new category</h1>
                                <button type="button" className="btn btn-outline-primary float-right" data-toggle="modal" data-target="#categoryModal">
                                <i className="fa fa-plus"></i> New Category</button>
                            </div>

                            <hr width="100%" />


                                {/* CATEGORY FORM STARTS HERE */}
                      

                            <div className="modal fade" id="categoryModal" tabIndex="-1" role="dialog" aria-labelledby="categoryModalTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="categoryModalTitle">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={this.handleCreateNewCategory}>
                                                <label htmlFor="title">Category Title</label>
                                                <input type="text" id="title"
                                                    className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : 'is-valid'}`}
                                                    name="title"
                                                       value={this.state.title}
                                                    onChange={this.OnChange.bind(this)}
                                                />
                                                {this.renderErrorFor('title')}

                                                <div className="modal-footer">
                                                    <div className="ml-3">
                                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                    <div className="mr-3">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>  

                    <div className="row mt-5 justify-content-center ">
                    <table className="table table-hover  table-bordered col-10">
                                <thead  className="table-dark">
                                    <tr>
                                        <th itemScope="col">Category</th>
                                        <th itemScope="col"><i className="fa fa-bin-o"></i>Remove</th>

                                    </tr>
                                </thead> 
                                <tbody>
                                    {categories.map(category => (
                                        <tr category = {category.title} key={category.id}>

                                            <td>{category.title}</td>
                                            
                                            <td>
                                                <form onSubmit={this.handleSubmit}>
                                                <input type="submit" value="Delete" className="btn btn-outline-danger"/>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default AddCategory;

if (document.getElementById('AddCategory')) {
    ReactDOM.render(<AddCategory />, document.getElementById('AddCategory'));
}