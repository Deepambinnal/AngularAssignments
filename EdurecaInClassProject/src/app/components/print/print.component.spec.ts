import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintComponent } from './print.component';
import { BusService } from '../../services/bus.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrintComponent', () => {
  let component: PrintComponent;
  let fixture: ComponentFixture<PrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintComponent ],
      imports: [HttpClientTestingModule],
      providers: [BusService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
