import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotopaxiComponent } from './cotopaxi.component';

describe('CotopaxiComponent', () => {
  let component: CotopaxiComponent;
  let fixture: ComponentFixture<CotopaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotopaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotopaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
