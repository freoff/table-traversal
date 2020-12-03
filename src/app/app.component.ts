import { Component } from '@angular/core'
import { range } from './range'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  range: (count: number) => unknown[] = range
  title = 'random'
  showAll = false

  show(i: number): boolean {
    return i % 2 === 0 || this.showAll
  }
  toggle(): void {
    this.showAll = !this.showAll
  }
}
