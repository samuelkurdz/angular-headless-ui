import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureButtonComponent } from './disclosure-button.component';

describe('DisclosureButtonComponent', () => {
  let component: DisclosureButtonComponent;
  let fixture: ComponentFixture<DisclosureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclosureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
