@extends('layouts.app')

@section('content')

    <h2 class="text-dark text-center mt-4">Add New Pizza</h2>
    <hr/>
    <div class="row mt-5">

        <div class="container mt-3 mb-5">
        
        <form action="/add" method="POST" class="needs-validation" enctype="multipart/form-data" novalidate>
        @csrf
        <div class="form-group row">

        <label for="name" class="col-md-2 col-form-label">{{ __('Name') }}</label>

        <input id="name" 
        name="name"
        type="text" 
        class="form-control  col-md-10"
        autocomplete="name"
        autofocus rows="5" required/>
        <div class="valid-feedback">
        Looks good!
        </div>
        <div class="invalid-feedback">
        Pizza name cannot be empty!
        </div>

        </div>


        <div class="form-group row">

        <label for="amount" class="col-md-2 col-form-label">{{ __('Amount') }}</label>

        <input id="amount" 
        name="amount"
        type="text" 
        class="form-control col-md-10"
        autocomplete="amount"
        autofocus rows="5" required/>
        <div class="valid-feedback">
        Looks good!
        </div>
        <div class="invalid-feedback">
        Amount field cannot be empty!
        </div>

        </div>


        <div class="form-group row">

        <label for="category" class="col-md-2 col-form-label">{{ __('Category') }}</label>

        <select name="category" id="category" 
        class="form-control col-md-10" required>
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

        
        <div class="form-group row">

        <label for="description" class="col-md-2 col-form-label">{{ __('Description') }}</label>

        <textarea id="description" 
        name="description"
        class="form-control col-md-10"
        autocomplete="description"
        autofocus rows="5" required>
        </textarea>
        <div class="valid-feedback">
        Looks good!
        </div>
        <div class="invalid-feedback">
        Please tell me more about the pizza!
        </div>
        </div>


        <div class="form-group row">

        <label for="image" class="col-md-2 col-form-label">Image</label>

        <input type="file" class="form-control-file @error('image') is-invalid @enderror p-1 col-md-10" id="image" name="image">

        @error('image')
        <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
        </span>
        @enderror

        </div>


        <div class="d-flex row pt-4 justify-content-between">
        
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

@endsection
