<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Binnacle;
Use App\Models\Vehicle;
Use Log;

class BinnacleController extends Controller
{
      public function getAll(){
        $data = Binnacle::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['plate'] = $request['plate'];
        $data['entry'] = $request['entry'];
        $data['exit'] = $request['exit'];
        $data['amount'] = $request['amount'];
        Binnacle::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Binnacle::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      // public function get($id){
      //   $data = Binnacle::find($id);
      //   return response()->json($data, 200);
      // }

      public function get($id){
        $data = Binnacle::where('plate', $id)->first();
        $vehicle = Vehicle::where('plate', $id)->first();
        if($data)
          $data['type_id'] = $vehicle ? $vehicle['type_id'] : 3;
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['plate'] = $request['plate'];
        $data['entry'] = $request['entry'];
        $data['exit'] = $request['exit'];
        $data['amount'] = $request['amount'];
        //Binnacle::find($id)->update($data);
        Binnacle::where('plate', $id)->first()->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
