import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcontentComponent } from './textcontent.component';

describe('TextcontentComponent', () => {
  let component: TextcontentComponent;
  let fixture: ComponentFixture<TextcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
