<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Resources\PizzaResource;
use Illuminate\Support\Facades\Storage;
use JD\Cloudder\Facades\Cloudder;

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
        $pizzas = Pizza::all();
        return view('admin.addpizza', compact('categories', 'pizzas'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'name' => ['required', 'min:5', 'max:50'],
            'description' => 'required',
            'category' => 'required',
            'amount' => 'required',
            'image' => 'required'
        ]);

        // dd($data);

        if ($request->has('image')) {

            //Uploaded file
            $image = $request->file('image');
            /**
             *  Get The Original Name of The Image ()
             *  Laravel's getClientOriginalName() returns the filename WITH extension
             *
             **/

            $filenamewithExtention = $request->file('image')->getClientOriginalName();

            //Fetch Filename without extention using php's PathInfo_Filename
            $namewithoutExtention = pathinfo($filenamewithExtention, PATHINFO_FILENAME);

            $image_name = $request->file('image')->getRealPath();

            /* Store image on cloudinary with tag, to a folder with specified width&height*/

            $out = Cloudder::upload($image_name,  $namewithoutExtention, [
                'tags' => 'innopizza',
                'folder' => 'innopizza/',
                'width' => 250,
                'height' => 250,
                "crop" => "scale",
                "format" => "png",
                "quality" => 'auto',
                "transformation" => array(
                    // "effect" => "sharpen",
                    array("overlay" => array("font_family" => "Times", "font_size" => 20, "font_weight" => "light", "text" => "innoPizza",  "gravity" => "west", "y" => 80), "color" => "silver",),
                )
            ]);

            list($width, $height) = getimagesize($image_name);

            $image_url = Cloudder::show(Cloudder::getPublicId(), ["width" => $width, "height" => $height]);
        }

        Pizza::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category'],
            'amount' => $data['amount'],
            'image' => $image_url
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
    public function destroy($id)
    {
        Pizza::find($id)->delete();

        return response()->json([
            'success' => 'Record deleted successfully!'
        ]);
    }
}