import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Binnacle } from '../binnacle';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  binnacle: Binnacle;
  form: FormGroup;

  constructor(
    public binnacleService: BinnacleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idBinnacle'];
    this.binnacleService.find(this.id).subscribe((data: Binnacle)=>{
      this.binnacle = data;
    });

    this.form = new FormGroup({
      plate:  new FormControl('', [ Validators.required ]),
      entry:  new FormControl('', [ Validators.required ]),
      exit:   new FormControl('', [ Validators.required ]),
      amount: new FormControl('', [ Validators.required ])
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