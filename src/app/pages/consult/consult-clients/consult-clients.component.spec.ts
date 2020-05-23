import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultClientsComponent } from './consult-clients.component';

describe('ConsultClientsComponent', () => {
  let component: ConsultClientsComponent;
  let fixture: ComponentFixture<ConsultClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
