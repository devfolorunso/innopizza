<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
// use App\Http\Resources\CategoryResource;

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
        
    }


    // Add category to database
    public function category(Request $request){
        
        $input = request()->validate([
            'title' => ['required','min:5']
        ]);
            Category::create([
                'title' => $input['title']
            ]);
            
    }


    //API fetch all categories || render category view
    public function categories(){
        $allcategories = Category::all();
        // return $allcategories;
        // return response()->json($allcategories, 200)
        //           ->header('Content-Type: applicaon/json');
        // return CategoryResource::collection($allcategories);
        // return view('admin.category');    
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
    }
}
