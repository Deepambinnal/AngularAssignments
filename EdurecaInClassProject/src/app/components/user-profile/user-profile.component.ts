import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../../services/bus.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userForm:FormGroup=this.fb.group({});
  submitted:boolean=false;
  journey;
  message = '';

  constructor(
    private _busService: BusService,
    private route:Router,
    private fb:FormBuilder
  ) {}

  ngOnInit() {
    this.submitted=true;
    this.userForm=this.fb.group({
      userName:['',[Validators.required, Validators.minLength(8)]],
      userMobile:['',[Validators.required,Validators.minLength(10)]],
      userEmail:['',[Validators.required,Validators.email]]
    })
    this.journey={
      route:this._busService.getJourneyRoutes(),
      bus:this._busService.getBus(),
      seats:this._busService.getSeats()
    }
    this._busService.setJourney(this.journey);
  }

  get formControls(){
    return this.userForm.controls;
  }

  ngOnSubmit(){
    if(this.userForm.invalid){
      this.message = "invalid form";
    }
    else{
      this._busService.setUserInfo(this.userForm.value);
      this.route.navigate(['print']);
    }
  }
}