import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public binnacleService: BinnacleService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      plate:  new FormControl('', [ Validators.required ]),
      entry:  new FormControl('', ),
      exit:   new FormControl('', ),
      amount: new FormControl('', )
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.binnacleService.create(this.form.value).subscribe(res => {
      console.log('Binnacle created successfully!');
      this.router.navigateByUrl('binnacle/index');
    })
  }

}