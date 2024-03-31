import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con8Component } from './con8.component';

describe('Con8Component', () => {
  let component: Con8Component;
  let fixture: ComponentFixture<Con8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Con8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Con8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
