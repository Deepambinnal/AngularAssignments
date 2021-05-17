import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBusComponent } from './search-bus.component';

const routes: Routes = [
  { path: '', component: SearchBusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBusRoutingModule { }