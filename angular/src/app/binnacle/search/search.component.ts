import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Binnacle } from '../binnacle';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id: number;
  binnacle: Binnacle;
  form: FormGroup;

  constructor(
    public binnacleService: BinnacleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['plate'];
    this.binnacleService.find(this.id).subscribe((data: Binnacle)=>{
      this.binnacle = data;
    });

    this.form = new FormGroup({
      plate:  new FormControl('', [ Validators.required ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log("submit search");
    console.log(this.form.value);
    this.binnacleService.find(this.id).subscribe(res => {
         console.log('Binnacle finde successfully!');
         this.router.navigateByUrl('binnacle/exit/'+this.form.value.plate);
    })
  }

}
