import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FGioithieuComponent } from './f-gioithieu.component';

describe('FGioithieuComponent', () => {
  let component: FGioithieuComponent;
  let fixture: ComponentFixture<FGioithieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FGioithieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FGioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
