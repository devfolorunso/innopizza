<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;

class AdminController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('admin.index');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    //  Render all categories to the category view.
    public function create()
    {
        $pizzas = Pizza::all();
        return view('admin.addpizza', compact('pizzas'));

    }




    // render category view
    public function categories()
    {
        $allcategories = Category::all();
        return view('admin.category', compact('allcategories'));    
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $input = request()->validate([
            'title' => ['required','min:5']
        ]);
            Category::create([
                'title' => $input['title']
            ]);

            return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Category::find($id)->delete($id);
        Pizza::find($id)->delete($id);
        return response()->json([
         'success' => 'Record deleted successfully!'
        ]);
    }
}
