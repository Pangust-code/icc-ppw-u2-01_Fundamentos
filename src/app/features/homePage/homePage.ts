import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  styles: [`
    h1 {
      color: darkgreen;
    }
    .counter {
      font-size: 2rem;
      margin: 1rem 0;
    }
    button {
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      background-color: darkgreen;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: green;
    }
  `],
  templateUrl: './homePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor() {
    setInterval(() => {
      console.log('*');
      this.counterSignal.update((v) => v + 1);
    },1000);
  }

  counter = 0;
  counterSignal = signal(0);


  changeValue(value: number) {
    this.counter += value;
    this.counterSignal.update((Current) => Current + value);
  }

  resetValue(value: number) {
    this.counter = value;
    this.counterSignal.set(value);
  }

}








