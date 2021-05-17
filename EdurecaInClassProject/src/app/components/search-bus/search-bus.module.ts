import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchBusComponent } from './search-bus.component';
import { SearchBusRoutingModule } from './search-bus-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchBusRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SearchBusComponent
  ],
  declarations: [
    SearchBusComponent
  ],
  providers: [
  ],
})
export class SearchBusModule { }