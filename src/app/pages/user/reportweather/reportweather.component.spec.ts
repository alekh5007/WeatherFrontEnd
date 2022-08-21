import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportweatherComponent } from './reportweather.component';

describe('ReportweatherComponent', () => {
  let component: ReportweatherComponent;
  let fixture: ComponentFixture<ReportweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
