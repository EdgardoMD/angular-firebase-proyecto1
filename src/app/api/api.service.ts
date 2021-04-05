import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '27f24dfb8f4f44ebadccbcd2c6306aba';
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + this.API_KEY);
  }
}
