import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean = true;
  register: boolean = false;
  registerForm: FormGroup=this.fb.group({});
  loginForm: FormGroup = this.fb.group({});
  submitted: boolean=false;
  message = '';

  constructor(private route:Router, private fb:FormBuilder, private _userService:UserService) { }

  ngOnInit(): void {
    this.submitted = true;
    this.registerForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(8)]],
      userMobile: ['',[Validators.required,Validators.minLength(10)]],
      userEmail: ['',[Validators.required,Validators.email]],
      userPassword: ['',[Validators.required,Validators.minLength(8)]]
    })

    this.loginForm=this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(8)]],
      userPassword: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get registerformControls(){
    return this.registerForm.controls;
  }

  get loginformControls(){
    return this.loginForm.controls;
  }

  toggle(){
    this.login = !this.login;
    this.register = !this.register;
  }

  onRegister(){
    if(this.registerForm.invalid){
      this.message = "invalid form";
    }
    else{
      const registerInfo = this.registerForm.value;
      this._userService.registerUser(registerInfo.userName, registerInfo.userPassword);
      this.toggle();
    }
  }

  onLogin(){
    if(this.loginForm.invalid){
      this.message = "invalid form";
    }
    else{
      const loginInfo = this.loginForm.value;
      let verifyUser = this._userService.verifyUser(loginInfo.userName, loginInfo.userPassword);
      if(verifyUser == true){
        this.route.navigate(['searchBus']);
      }
      else{
        this.message = "username or password is not correct";
      }
    }
  }
}

