@extends('layouts.app')

@section('content')
    
    <div id="navbar"> 
        <NavbarComponent /> 
    </div>

    <div id="slider"> 
        <Slider /> 
    </div>

    <div id="catalogue" class="md:tw-flex tw-justify-start"> 
        <Catalogue /> 
    </div>

    <div class="container-fluid">

        <div class="row justify-content-center">
            <div class="col-md-12">
            </div>
        </div>

    </div>

    <div id="footer">
    <Footer/>
    </div>
    
@endsection
