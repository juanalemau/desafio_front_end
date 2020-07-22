import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarColumnDltComponent } from './bar-column.component';

describe('BarColumnDltComponent', () => {
  let component: BarColumnDltComponent;
  let fixture: ComponentFixture<BarColumnDltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarColumnDltComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarColumnDltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
