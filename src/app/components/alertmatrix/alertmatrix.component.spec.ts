import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmatrixComponent } from './alertmatrix.component';

describe('AlertmatrixComponent', () => {
  let component: AlertmatrixComponent;
  let fixture: ComponentFixture<AlertmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
