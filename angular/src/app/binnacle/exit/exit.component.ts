import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Binnacle } from '../binnacle';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  id: number;
  binnacle: Binnacle;
  form: FormGroup;
  timestamp: string;
  minutes: string;

  constructor(
    public binnacleService: BinnacleService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    var current = new Date();
    current.setSeconds(0)
    current.setMilliseconds(0)
    this.timestamp = current.getTime().toString();
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idBinnacle'];
    this.binnacleService.find(this.id).subscribe((data: Binnacle)=>{
      this.binnacle = data;
      console.log(this.binnacle);
      const amountMinutes = (parseInt(this.timestamp) - (this.binnacle.entry))/60000; 
      console.log(amountMinutes.toString());
      this.minutes = amountMinutes.toString();
    });

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
    this.binnacleService.update(this.id, this.form.value).subscribe(res => {
         console.log('Binnacle updated successfully!');
         this.router.navigateByUrl('binnacle/index');
    })
  }

}
