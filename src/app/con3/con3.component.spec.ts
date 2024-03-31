import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con3Component } from './con3.component';

describe('Con3Component', () => {
  let component: Con3Component;
  let fixture: ComponentFixture<Con3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
