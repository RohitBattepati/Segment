import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SubTaskApiResponse = {
  message: string;
  data: string;
};

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
  apiResponse: any = '';

  constructor(private httpClient: HttpClient) {}

  submitInput() {
    this.resultsHeader = this.searchString;

    //open api call

    this.httpClient
      .post<SubTaskApiResponse>('http://localhost:3000/item', {
        todo: this.searchString,
      })
      .subscribe((res) => {
        console.log(res);
        this.apiResponse = JSON.parse(res.data);
        console.log(this.apiResponse, 'JSON API RES');
      });
  }
}
