import { Component, OnInit } from '@angular/core';

import { BinnacleService } from '../binnacle.service';
import { Binnacle } from '../binnacle';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  binnacles: Binnacle[] = [];

  constructor(public binnacleService: BinnacleService) { }

  
  ngOnInit(): void {
    this.binnacleService.getAll().subscribe((data: Binnacle[])=>{
      this.binnacles = data;
      console.log(this.binnacles);
    })
  }

  deleteBinnacle(id){
    this.binnacleService.delete(id).subscribe(res => {
         this.binnacles = this.binnacles.filter(item => item.id !== id);
         console.log('Binnacle deleted successfully!');
    })
  }
}
