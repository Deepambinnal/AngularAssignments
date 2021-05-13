import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    component.loginForm.setValue({user_name: 'admin123',user_password: 'admin156'});
    const login = component.onLogin();
    expect(component.message).toBe("username or password is not correct");
  });
  it('log in should return invalid form', () => {
    component.loginForm.setValue({user_name: 'admin123',user_password: ''});
    const login = component.onLogin();
    expect(component.message).toBe("invalid form");
  });

  it('login should route to SearchBus component', () => {
    component.loginForm.setValue({user_name: 'admin123',user_password: 'admin123'});
    const login = component.onLogin();
    expect (mockRouter.navigate).toHaveBeenCalledWith(['searchBus']);
  });
});
