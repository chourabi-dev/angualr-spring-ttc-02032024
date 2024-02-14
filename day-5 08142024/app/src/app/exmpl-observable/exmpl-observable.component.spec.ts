import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmplObservableComponent } from './exmpl-observable.component';

describe('ExmplObservableComponent', () => {
  let component: ExmplObservableComponent;
  let fixture: ComponentFixture<ExmplObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmplObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmplObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
