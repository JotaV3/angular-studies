import { Component, signal } from '@angular/core';
import { HelloWorld } from './helloworld/helloworld'

@Component({
  imports: [HelloWorld],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
