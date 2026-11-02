import { Component, signal } from '@angular/core';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  imports: [ShoppingList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
