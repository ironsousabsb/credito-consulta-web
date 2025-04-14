import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCreditoComponent } from './detalhe-credito.component';

describe('DetalheCreditoComponent', () => {
  let component: DetalheCreditoComponent;
  let fixture: ComponentFixture<DetalheCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
