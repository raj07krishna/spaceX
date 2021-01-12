import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchHomeComponent } from './launch-home.component';

describe('LaunchHomeComponent', () => {
  let component: LaunchHomeComponent;
  let fixture: ComponentFixture<LaunchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
