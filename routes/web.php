<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/

// Add pizza//
Route::Post('admin/addpizza', 'PizzaController@store');
Route::Post('admin/category', 'AdminController@store');


// Display views//
Route::get('Pizzas', 'PizzaController@index');
Route::get('admin', 'AdminController@index');

// Display admin forms//
Route::get('admin/addpizza', 'PizzaController@create');

Route::get('admin/category',  'AdminController@categories');

// Delete//
Route::delete('/admin/category/{id}', 'AdminController@destroy');
Route::delete('/addpizza/{id}', 'PizzaController@destroy');

// React Router Path//
Route::view('/{path?}', 'welcome');
