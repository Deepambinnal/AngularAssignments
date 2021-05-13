import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchBusComponent } from './search-bus.component';
import { BusService } from '../../services/bus.service';
import { UserService } from '../../services/user.service';
import { UploadfileService } from '../../services/upload-file.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('SearchBusComponent', () => {
  let component: SearchBusComponent;
  let fixture: ComponentFixture<SearchBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBusComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers:[BusService, UserService, UploadfileService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
