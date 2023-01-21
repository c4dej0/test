import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(public vehicleService: VehicleService) { }

  
  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((data: Vehicle[])=>{
      this.vehicles = data;
      console.log(this.vehicles);
    })
  }

  deleteVehicle(id){
    this.vehicleService.delete(id).subscribe(res => {
         this.vehicles = this.vehicles.filter(item => item.id !== id);
         console.log('Vehicle deleted successfully!');
    })
  }
}
