import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeteoComponent } from './search-meteo.component';

describe('SearchMeteoComponent', () => {
  let component: SearchMeteoComponent;
  let fixture: ComponentFixture<SearchMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
