import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { EntryComponent } from './entry/entry.component';
import { ExitComponent } from './exit/exit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'binnacle', redirectTo: 'binnacle/index', pathMatch: 'full'},
  { path: 'binnacle/index', component: IndexComponent },
  { path: 'binnacle/create', component: CreateComponent },
  { path: 'binnacle/entry', component: EntryComponent },
  { path: 'binnacle/search', component: SearchComponent },
  { path: 'binnacle/exit/:idBinnacle', component: ExitComponent },
  { path: 'binnacle/edit/:idBinnacle', component: EditComponent } 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinnacleRoutingModule { }
