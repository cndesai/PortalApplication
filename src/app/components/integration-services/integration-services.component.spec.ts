import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationServicesComponent } from './integration-services.component';

describe('IntegrationServicesComponent', () => {
  let component: IntegrationServicesComponent;
  let fixture: ComponentFixture<IntegrationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
