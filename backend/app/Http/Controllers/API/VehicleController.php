<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Vehicle;

class VehicleController extends Controller
{
    public function getAll(){
        $data = Vehicle::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['plate'] = $request['plate'];
        $data['type_id'] = $request['type_id'];
        Vehicle::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Vehicle::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Vehicle::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['plate'] = $request['plate'];
        $data['type_id'] = $request['type_id'];
        Vehicle::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
