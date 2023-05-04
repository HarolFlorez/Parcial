import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVehiculosComponent } from './formulario-vehiculos.component';

describe('FormularioVehiculosComponent', () => {
  let component: FormularioVehiculosComponent;
  let fixture: ComponentFixture<FormularioVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
