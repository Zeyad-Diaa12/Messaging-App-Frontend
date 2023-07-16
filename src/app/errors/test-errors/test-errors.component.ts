import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl: string = 'https://localhost:7273/api/';
  validationErrors : string [] = [];

  constructor (private http : HttpClient) {}

  ngOnInit(): void {
  }

  get404Errors() {
    this.http.get(this.baseUrl + 'error/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get500Errors() {
    this.http.get(this.baseUrl + 'error/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get400Errors() {
    this.http.get(this.baseUrl + 'error/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get401Errors() {
    this.http.get(this.baseUrl + 'error/unauth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register',{}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error
      }
    });
  }

}
