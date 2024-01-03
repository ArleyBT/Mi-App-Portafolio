import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNegroComponent } from './banner-negro.component';

describe('BannerNegroComponent', () => {
  let component: BannerNegroComponent;
  let fixture: ComponentFixture<BannerNegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNegroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerNegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
