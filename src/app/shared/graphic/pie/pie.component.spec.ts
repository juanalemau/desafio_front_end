import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDltComponent } from './pie.component';

describe('PieDltComponent', () => {
  let component: PieDltComponent;
  let fixture: ComponentFixture<PieDltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieDltComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
