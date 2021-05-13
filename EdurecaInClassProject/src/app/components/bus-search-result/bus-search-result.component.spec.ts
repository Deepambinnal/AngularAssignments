import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchResultComponent } from './bus-search-result.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BusSearchResultComponent', () => {
  let component: BusSearchResultComponent;
  let fixture: ComponentFixture<BusSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BusSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
