import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con7Component } from './con7.component';

describe('Con7Component', () => {
  let component: Con7Component;
  let fixture: ComponentFixture<Con7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
