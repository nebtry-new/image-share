import { TestBed } from '@angular/core/testing';
import { SlipComponent } from './slip.component';
describe('SlipComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlipComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SlipComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
