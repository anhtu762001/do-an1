import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVanchuyenComponent } from './s-vanchuyen.component';

describe('SVanchuyenComponent', () => {
  let component: SVanchuyenComponent;
  let fixture: ComponentFixture<SVanchuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVanchuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVanchuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
