import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con2Component } from './con2.component';

describe('Con2Component', () => {
  let component: Con2Component;
  let fixture: ComponentFixture<Con2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
