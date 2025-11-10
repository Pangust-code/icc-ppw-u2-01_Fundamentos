import { Injectable, signal, output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor() {}

  proyectos = signal<Proyecto[]>([{ id: 1, name: 'Proyecto A', description: 'Descripcion' }]);

  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }

}
