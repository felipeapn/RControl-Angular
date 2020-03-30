import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMainComponent } from './work-main.component';

describe('WorkMainComponent', () => {
  let component: WorkMainComponent;
  let fixture: ComponentFixture<WorkMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
