import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineDltComponent } from './bar-line.component';

describe('BarLineDltComponent', () => {
  let component: BarLineDltComponent;
  let fixture: ComponentFixture<BarLineDltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarLineDltComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLineDltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
