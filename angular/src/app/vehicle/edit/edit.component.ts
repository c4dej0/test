import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  vehicle: Vehicle;
  form: FormGroup;

  constructor(
    public vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVehicle'];
    this.vehicleService.find(this.id).subscribe((data: Vehicle)=>{
      this.vehicle = data;
    });

    this.form = new FormGroup({
      plate:    new FormControl('', [ Validators.required ]),
      type_id:  new FormControl('', [ Validators.required ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vehicleService.update(this.id, this.form.value).subscribe(res => {
         console.log('Vehicle updated successfully!');
         this.router.navigateByUrl('vehicle/index');
    })
  }

}