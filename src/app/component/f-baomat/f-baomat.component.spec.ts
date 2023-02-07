import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBaomatComponent } from './f-baomat.component';

describe('FBaomatComponent', () => {
  let component: FBaomatComponent;
  let fixture: ComponentFixture<FBaomatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FBaomatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FBaomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
