import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatComponent } from './select-seat.component';
import { BusService } from '../../services/bus.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SelectSeatComponent', () => {
  let component: SelectSeatComponent;
  let fixture: ComponentFixture<SelectSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSeatComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ BusService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should initialize fare to 0', () => {
    expect(component.total).toEqual(0);
  });
});
