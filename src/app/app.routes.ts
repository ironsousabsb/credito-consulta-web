// app.routes.ts
import { Routes } from '@angular/router';
import { FormularioCreditoComponent } from './paginas/formulario-credito/formulario-credito.component';
import { ContainerComponent } from './componentes/container/container.component';
import { DetalheCreditoComponent } from './paginas/detalhe-credito/detalhe-credito.component';

export const routes: Routes = [
  {
    path: 'lista-creditos',
    component: ContainerComponent
  },
  {
    path: 'formulario',
    component: FormularioCreditoComponent
  },
  {
    path: 'detalhe-credito/:id',
    component: DetalheCreditoComponent
  },
  {
    path: '',
    redirectTo: '/lista-creditos',
    pathMatch: 'full'
  }
];
