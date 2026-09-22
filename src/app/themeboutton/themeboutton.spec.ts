import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Themeboutton } from './themeboutton';

describe('Themeboutton', () => {
  let component: Themeboutton;
  let fixture: ComponentFixture<Themeboutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Themeboutton],
    }).compileComponents();

    fixture = TestBed.createComponent(Themeboutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
