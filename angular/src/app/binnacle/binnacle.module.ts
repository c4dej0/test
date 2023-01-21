import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinnacleRoutingModule } from './binnacle-routing.module';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { ExitComponent } from './exit/exit.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    IndexComponent, 
    CreateComponent, 
    EditComponent, 
    EntryComponent, 
    ExitComponent, SearchComponent],
  imports: [
    CommonModule,
    BinnacleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BinnacleModule { }
