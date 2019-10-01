<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#b5bfd7"/>
    <title>{{ config('app.name', 'innoPizza') }}</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
   <link rel="stylesheet" href="{{ asset('vendor/fontawesome/css/all.min.css') }}">
   <link rel="icon" type="image/png" href="https://img.icons8.com/ios/50/000000/favorite-cart.png">
  
</head>
<body>

<div id="app">
    <main class="">
        @yield('content')
    </main>
</div>

<!-- JS SCRIPTS FOR ADMIN DASHBOARD. -->
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/admin.js') }}" ></script>

</body>
</html>