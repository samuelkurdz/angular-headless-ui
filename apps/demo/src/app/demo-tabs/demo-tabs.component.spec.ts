import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTabsModule } from '@ngheadlessui/tabs';

import { DemoTabsComponent } from './demo-tabs.component';

describe('DemoTabsComponent', () => {
  let component: DemoTabsComponent;
  let fixture: ComponentFixture<DemoTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTabsModule],
      declarations: [ DemoTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
