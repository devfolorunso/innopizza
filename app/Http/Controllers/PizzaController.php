<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Http\Resources\PizzaResource;

class PizzaController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pizzas = Pizza::all();
        // return response($pizzas);
        return PizzaResource::collection($pizzas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::with('pizzas')->orderBy('title', 'asc')->get();
        return view('admin.addpizza', compact('categories'));
    }

    /**
     * Store a newly created resource in storage. 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => ['required','min:5'],
            'description' => ['required','min:15'],
            'category' => 'required',
            'amount' => 'required',
            'image' => ['required','image','max:1999'],
        ]);

        // $imagePath = $file->store('pizza','public');

        $pizzaPath = request('image')->store('pizza','public');
        
        $image = Image::make(public_path("storage/{$pizzaPath}"))->fit(600,300)->save();
        
        Pizza::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category'],
            'amount' => $data['amount'],
            'image' => $pizzaPath,
        ]);
        
        // return response()->json('Pizza created!');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */

     public function show(Pizza $pizza)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function edit(Pizza $pizza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pizza $pizza)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pizza $pizza)
    {
        //
    }
}
