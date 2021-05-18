import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

const routes: Routes = [
    { path: '', component: ErrorComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ErrorComponent,
    RouterModule
  ],
  declarations: [
    ErrorComponent,
  ],
  providers: [
  ],
})
export class ErrorModule { }