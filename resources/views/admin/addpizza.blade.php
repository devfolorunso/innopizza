@extends('layouts.admin')

@section('content')

<div id="wrapper">
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a class='sidebar-brand d-flex align-items-center justify-content-center' href='/'>
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Hi! Welcome</div>
        </a>
        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
            <a class='nav-link' href='/'>
                <i class="fas fa-fw fa-home"></i>
                <span>HOME</span>
            </a>
        </li>

        <hr class="sidebar-divider" />
        <li class="nav-item">
            <a class='nav-link' href='/admin/addpizza'>
                <i class="fas fa-fw fa-plus"></i>
                <span>Add Pizza</span>
            </a>
        </li>
        <li class="nav-item">
            <a class='nav-link' href='/admin/category'>
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
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">ADMIN</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>




            <div class="container">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Add New Pizza</h1>
                </div>

                <hr width="100%" />

                <div class="row mt-5 justify-content-center">

                    <form action="/admin/addpizza" method="POST" class="needs-validation form" enctype="multipart/form-data"
                        novalidate>
                        @csrf
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            
                            <label for="name">{{ __('Pizzas Name') }}</label>
                            <input id="name" name="name" type="text" class="form-control" autocomplete="name"
                                autofocus required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Pizza name cannot be empty!
                            </div>
                            </div>

                            <div class="form-group col-md-6">
                            <label for="amount">{{ __('Price') }}</label>
                            <input id="amount" name="amount" type="text" class="form-control"
                                autocomplete="amount" autofocus rows="5" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Amount field cannot be empty!
                            </div>
                            </div>

                        </div>


                        <div class="form-group">

                            <label for="category" class="col-form-label">{{ __('Pizzas Category') }}</label>

                            <select name="category" id="category" class="form-control" required>
                                <option value="">~ Select a Category ~</option>
                                @foreach ($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->title }}</option>
                                @endforeach
                            </select>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please select a category
                            </div>

                        </div>


                        <div class="form-group">

                            <label for="description">{{ __('Description') }}</label>

                            <textarea id="description" name="description" class="form-control"
                                autocomplete="description" autofocus rows="2" required>
                            </textarea>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please tell me more about the pizza!
                            </div>
                        </div>


                        <div class="form-group">

                            <label for="image" >Image</label>

                            <input type="file"
                                class="form-control-file @error('image') is-invalid @enderror p-1" id="image"
                                name="image">

                            @error('image')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror

                        </div>


                        <div class="d-flex row pt-2 justify-content-between">

                            <div>
                                <button class="btn btn-danger" type="reset">Reset</button>
                            </div>

                            <div>
                                <button class="btn btn-primary">Create Post</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
</div>



@endsection