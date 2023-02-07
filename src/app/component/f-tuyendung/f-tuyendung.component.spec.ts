import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTuyendungComponent } from './f-tuyendung.component';

describe('FTuyendungComponent', () => {
  let component: FTuyendungComponent;
  let fixture: ComponentFixture<FTuyendungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTuyendungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
