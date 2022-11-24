import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVuotaComponent } from './navbar-vuota.component';

describe('NavbarVuotaComponent', () => {
  let component: NavbarVuotaComponent;
  let fixture: ComponentFixture<NavbarVuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVuotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarVuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
