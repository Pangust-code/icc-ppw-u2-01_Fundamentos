import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListadoProyectos } from '../proyectoPage/components/listado-proyectos/listado-proyectos';
import { AddProyecto } from '../proyectoPage/components/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyecto-dos',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectoDos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDos {

  proyectosService = inject(ProyectosService);

 }
