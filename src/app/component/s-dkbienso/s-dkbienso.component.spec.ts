import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDkbiensoComponent } from './s-dkbienso.component';

describe('SDkbiensoComponent', () => {
  let component: SDkbiensoComponent;
  let fixture: ComponentFixture<SDkbiensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDkbiensoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDkbiensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
