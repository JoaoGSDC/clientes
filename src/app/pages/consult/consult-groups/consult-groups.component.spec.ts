import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultGroupsComponent } from './consult-groups.component';

describe('ConsultGroupsComponent', () => {
  let component: ConsultGroupsComponent;
  let fixture: ComponentFixture<ConsultGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
