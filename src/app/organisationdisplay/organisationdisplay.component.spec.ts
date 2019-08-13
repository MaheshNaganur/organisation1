import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationdisplayComponent } from './organisationdisplay.component';

describe('OrganisationdisplayComponent', () => {
  let component: OrganisationdisplayComponent;
  let fixture: ComponentFixture<OrganisationdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
