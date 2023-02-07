import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDieukhoanComponent } from './f-dieukhoan.component';

describe('FDieukhoanComponent', () => {
  let component: FDieukhoanComponent;
  let fixture: ComponentFixture<FDieukhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDieukhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDieukhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
