import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  styles: [
    `
    button {
      margin: 5px;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {


  name = signal('');
  description = signal('');
  //input
  newProyecto = output<Proyecto>();
  removeProyecto = output<number>();

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }

  addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      description: this.description()
    };

    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');

  }

  deleteProyecto(id: number) {
    this.removeProyecto.emit(id);
  }

 }
