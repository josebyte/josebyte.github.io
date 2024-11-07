import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBadgeComponent } from './cv-badge.component';

describe('CvBadgeComponent', () => {
  let component: CvBadgeComponent;
  let fixture: ComponentFixture<CvBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
