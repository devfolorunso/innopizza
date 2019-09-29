<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/
// Fetch all pizzas
Route::get('pizzas', 'PizzaController@index');

//Post Category to databse
Route::Post('admin/category', 'AdminController@category');

// Fetch all categories
Route::get('admin/categories',  'AdminController@categories');







