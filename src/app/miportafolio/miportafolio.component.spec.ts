import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiportafolioComponent } from './miportafolio.component';

describe('MiportafolioComponent', () => {
  let component: MiportafolioComponent;
  let fixture: ComponentFixture<MiportafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiportafolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiportafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
