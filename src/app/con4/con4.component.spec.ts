import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con4Component } from './con4.component';

describe('Con4Component', () => {
  let component: Con4Component;
  let fixture: ComponentFixture<Con4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
