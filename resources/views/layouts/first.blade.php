<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'innoPizza') }}</title>


    <!-- Fonts -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <script  src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    <link href="{{ asset('css/pizza.css') }}" rel="stylesheet">
   <link rel="icon" type="image/png" href="https://img.icons8.com/ios/50/000000/favorite-cart.png">
    
</head>
<body>
    <div id="app">
            @yield('content')
    </div>
    <script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
