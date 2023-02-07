import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SThibanglaiComponent } from './s-thibanglai.component';

describe('SThibanglaiComponent', () => {
  let component: SThibanglaiComponent;
  let fixture: ComponentFixture<SThibanglaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SThibanglaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SThibanglaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
