import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con9Component } from './con9.component';

describe('Con9Component', () => {
  let component: Con9Component;
  let fixture: ComponentFixture<Con9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
