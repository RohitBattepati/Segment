import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Segment');
  searchString: string = '';
  resultsHeader: string = '';

  constructor() {}

  submitInput() {
    this.resultsHeader = this.searchString;
  }
}
