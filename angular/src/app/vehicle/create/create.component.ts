import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    this.vehicleService.create(this.form.value).subscribe(res => {
      console.log('Vehicle created successfully!');
      this.router.navigateByUrl('vehicle/index');
    })
  }

}
