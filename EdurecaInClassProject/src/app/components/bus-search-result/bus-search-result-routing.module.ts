import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusSearchResultComponent } from './bus-search-result.component';
import { SelectSeatComponent } from '../select-seat/select-seat.component';

const routes: Routes = [
  { path: '', component: BusSearchResultComponent,
   children:[
   { path:"selectSeat/:id", pathMatch: 'full', component:SelectSeatComponent}
   ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusSearchResultRoutingModule { }