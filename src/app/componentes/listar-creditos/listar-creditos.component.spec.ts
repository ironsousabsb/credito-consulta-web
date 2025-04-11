import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCreditosComponent } from './listar-creditos.component';

describe('ListarCreditosComponent', () => {
  let component: ListarCreditosComponent;
  let fixture: ComponentFixture<ListarCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCreditosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
