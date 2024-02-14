import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmplPromiseComponent } from './exmpl-promise.component';

describe('ExmplPromiseComponent', () => {
  let component: ExmplPromiseComponent;
  let fixture: ComponentFixture<ExmplPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmplPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmplPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
