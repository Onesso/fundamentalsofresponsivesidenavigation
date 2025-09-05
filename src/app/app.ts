import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Side } from './screen/side/side';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Side],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('side');
}
