import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiRadioModule } from '@ngheadlessui/radio';

import { DemoRadioComponent } from './demo-radio.component';

describe('DemoRadioComponent', () => {
  let component: DemoRadioComponent;
  let fixture: ComponentFixture<DemoRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiRadioModule],
      declarations: [ DemoRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
