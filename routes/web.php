<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/
// Add pizza
Route::Post('admin/addpizza', 'PizzaController@store');

// Display views
Route::get('Pizzas', 'PizzaController@index');
Route::get('admin', 'AdminController@index');

// Display admin forms
Route::get('admin/addpizza', 'PizzaController@create');
Route::get('admin/category',  'AdminController@categories');

// React Router Path
Route::view('/{path?}', 'welcome');
