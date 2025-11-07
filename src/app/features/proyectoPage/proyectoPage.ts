import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyecto-page',
  imports: [],
  templateUrl: './proyectoPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoPage {
  name = signal('');
  description = signal('');

  proyectos = signal<Proyecto[]>([{ id: 1, name: 'Proyecto A', description: 'Descripcion' }]);

  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      name: this.name(),
      description: this.description()
    };
    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.description.set('');
  }
}
