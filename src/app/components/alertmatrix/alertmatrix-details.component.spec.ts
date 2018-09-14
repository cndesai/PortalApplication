import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmatrixDetailsComponent } from './alertmatrix-details.component';

describe('AlertmatrixDetailsComponent', () => {
  let component: AlertmatrixDetailsComponent;
  let fixture: ComponentFixture<AlertmatrixDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertmatrixDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertmatrixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
