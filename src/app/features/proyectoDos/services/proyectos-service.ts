import { Injectable, signal, output, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

    constructor() {

      effect(() => {
        //guardar
        const data = this.proyectos();
        console.log('Guardando en localStorage> ', data);
        console.log(JSON.stringify(data));
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      });
    }

  private readonly STORAGE_KEY = 'proyectosAPP';

  proyectos = signal<Proyecto[]>(this.loadProyectos());

  private loadProyectos(): Proyecto[] {
    //leer
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }




  // proyectos = signal<Proyecto[]>([{ id: 1, name: 'Proyecto A', description: 'Descripcion' }]);

  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }


  deleteProyecto() {
    // Lógica para eliminar un proyecto (a implementar)
    this.proyectos.set(this.proyectos().slice(1));
  }


}
