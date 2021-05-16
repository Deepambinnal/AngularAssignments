import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user ;
  admin = {
    userName: 'admin123',
    password: 'admin123'
  }
  constructor() { }

  setUser(user){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  registerUser(userName: string, pwd: string){
    let user = {
      userName: userName,
      password: pwd
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  verifyUser(userName: string, pwd: string){
    if(userName === this.admin.userName){
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
      if(userName === user.userName){
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
