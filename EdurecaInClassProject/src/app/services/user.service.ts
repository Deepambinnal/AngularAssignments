import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user ;
  admin = {
    username : 'admin123',
    password : 'admin123'
  }
  constructor() { }

  setUser(user){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  registerUser(uname:string,pwd:string){
    let user = {
      username : uname,
      password : pwd
    }
    //users[]
    localStorage.setItem('user',JSON.stringify(user));
  }

  verifyUser(uname:string,pwd:string){
    if(uname === this.admin.username){
      if(pwd === this.admin.password){
        this.setUser('admin');
        return true;
      }
      else{
        return false;
      }
    }
    else{
      let user =JSON.parse(localStorage.getItem('user') || '{}');
      if(uname === user.username){
        if(pwd === user.password){
          this.setUser('others');
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
  }
}
