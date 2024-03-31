import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con10Component } from './con10.component';

describe('Con10Component', () => {
  let component: Con10Component;
  let fixture: ComponentFixture<Con10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
