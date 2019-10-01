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
            <a class='nav-link' href='/admin'>
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <hr class="sidebar-divider" />
        <li class="nav-item">
            <a class='nav-link' href='/admin/addpizza'>
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Add Pizza</span>
            </a>
        </li>
        <li class="nav-item">
            <a class='nav-link' href='/admin/category'>
                <i class="fas fa-fw fa-tachometer-alt"></i>
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
                            <img alt="" src="/media/logo.png" width="50" height="50"
                                class="d-inline-block align-center" />
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
                    <h1 class="h3 mb-0 text-gray-800">Add new category</h1>
                    <button type="button" class="btn btn-outline-primary float-right" data-toggle="modal"
                        data-target="#categoryModal">
                        <i class="fa fa-plus"></i> New Category</button>
                </div>

                <hr width="100%" />




                <div class="modal fade" id="categoryModal" tabIndex="-1" role="dialog"
                    aria-labelledby="categoryModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="categoryModalTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="/admin/category" method="POST" class="needs-validation form"
                                    enctype="multipart/form-data" novalidate>
                                    @csrf

                                    <div class="form-group">
                                        <label for="title">{{ __('Title') }}</label>
                                        <input id="title" name="title" type="text" class="form-control"
                                            autocomplete="title" autofocus required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            category cannot be empty!
                                        </div>
                                    </div>

                            </div>
                            <div class="modal-footer">
                                <div class="ml-3">
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                                <div class="mr-3">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>

            <div class="row mt-5 justify-content-center " id="content">
                <table class="table table-hover  table-bordered col-10">
                    <thead class="table-dark">
                        <tr>
                            <th itemScope="col">Category</th>
                            <th itemScope="col">Remove</th>

                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($allcategories as $category)
                        <tr>

                            <td>{{$category->title}}</td>

                            <td>
                                <button class="rmcategory text-center btn btn-outline-danger" id="del"
                                    data-id="{{ $category->id }}">
                                    <i class="fas fa-fw fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <script type="text/javascript" charset="utf-8">
        $(document).ready(function() {
            $(".rmcategory").click(function() {
                var id = $(this).data("id");
                var token = $("meta[name='csrf-token']").attr("content");
                $.ajax({
                    url: "/category/" + id,
                    type: 'DELETE',
                    data: {
                        "id": id,
                        "_token": token,
                    },

                    success: function(data) {
                        location.reload(); 
                    }
                });
            });
        });
        </script>
    </div>
</div>
</div>
@endsection