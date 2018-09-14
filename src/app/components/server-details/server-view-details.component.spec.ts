import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerViewDetailsComponent } from './server-view-details.component';

describe('ServerViewDetailsComponent', () => {
  let component: ServerViewDetailsComponent;
  let fixture: ComponentFixture<ServerViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
