import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiDisclosureModule } from '@ngheadlessui/disclosure';

import { DemoDisclosureComponent } from './demo-disclosure.component';

describe('DemoDisclosureComponent', () => {
  let component: DemoDisclosureComponent;
  let fixture: ComponentFixture<DemoDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDisclosureModule],
      declarations: [ DemoDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
