import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailUrl = 'https://kaceres.dev/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string): Observable<any> {
    const data = {
      name: name,
      email: email,
      message: message,
    };
    return this.http.post(this.emailUrl, data, { responseType: 'text' });
  }
}
