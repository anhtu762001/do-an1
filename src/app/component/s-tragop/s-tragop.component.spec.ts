import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STragopComponent } from './s-tragop.component';

describe('STragopComponent', () => {
  let component: STragopComponent;
  let fixture: ComponentFixture<STragopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STragopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STragopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
