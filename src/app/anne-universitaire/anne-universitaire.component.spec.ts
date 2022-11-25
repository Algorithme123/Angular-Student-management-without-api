import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneUniversitaireComponent } from './anne-universitaire.component';

describe('AnneUniversitaireComponent', () => {
  let component: AnneUniversitaireComponent;
  let fixture: ComponentFixture<AnneUniversitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneUniversitaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnneUniversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
