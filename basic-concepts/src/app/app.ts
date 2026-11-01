import { Component, signal } from '@angular/core';
import { HelloWorld } from './helloworld/helloworld'
import { Mypage } from './mypage/mypage';

@Component({
  imports: [HelloWorld, Mypage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
