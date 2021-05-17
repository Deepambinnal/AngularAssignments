import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, FormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('log in should return username or password incorrect', () => {
    component.loginForm.setValue({userName: 'admin123',userPassword: 'admin156'});
    const login = component.onLogin();
    expect(component.message).toBe("username or password is not correct");
  });
  
  it('log in should return invalid form', () => {
    component.loginForm.setValue({userName: 'admin123',userPassword: ''});
    const login = component.onLogin();
    expect(component.message).toBe("invalid form");
  });

  it('login should route to SearchBus component', () => {
    component.loginForm.setValue({userName: 'admin123',userPassword: 'admin123'});
    const login = component.onLogin();
    expect (mockRouter.navigate).toHaveBeenCalledWith(['searchBus']);
  });

  it('Register should return invalid form', () => {
    const register_user = {
      userName: "Roopa123",
      userMobile: "1234567890",
      userEmail: "roopa@live.com",
      userPassword: "roopa"
    }
    component.registerForm.setValue(register_user);
    const register = component.onRegister();
    expect(component.message).toBe("invalid form");
  });

  it('Register should should store the user credentials in localstorage', () => {
    const registerUser = {
      userName: "Roopa123",
      userMobile: "1234567890",
      userEmail: "roopa@live.com",
      userPassword: "roopa123"
    }
    component.registerForm.setValue(registerUser);
    const register = component.onRegister();
    let registredUser =JSON.parse(localStorage.getItem('user') || '{}');
    expect(registredUser.userName).toBe(registerUser.userName);
    expect(registredUser.password).toBe(registerUser.userPassword);
  });

});
