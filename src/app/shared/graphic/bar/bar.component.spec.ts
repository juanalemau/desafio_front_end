import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDltComponent } from './bar.component';

describe('BarDltComponent', () => {
  let component: BarDltComponent;
  let fixture: ComponentFixture<BarDltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarDltComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
