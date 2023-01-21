import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  form: FormGroup;
  timestamp: string;

  constructor(
    public binnacleService: BinnacleService,
    private router: Router
  ) { 
    var current = new Date();
    current.setSeconds(0)
    current.setMilliseconds(0)
    this.timestamp = current.getTime().toString();
  }

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
      console.log('Binnacle entry successfully!');
      this.router.navigateByUrl('binnacle/index');
    })
  }

}
