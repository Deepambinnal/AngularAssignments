import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
    { path: '', component: UserProfileComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserProfileComponent,
    RouterModule
  ],
  declarations: [
    UserProfileComponent,
  ],
  providers: [
  ],
})
export class UserProfileModule { }