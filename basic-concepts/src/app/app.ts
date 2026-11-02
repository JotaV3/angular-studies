import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator';

@Component({
  imports: [Calculator],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
