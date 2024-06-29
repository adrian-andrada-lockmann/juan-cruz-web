import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderappComponent } from './sliderapp.component';

describe('SliderappComponent', () => {
  let component: SliderappComponent;
  let fixture: ComponentFixture<SliderappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
