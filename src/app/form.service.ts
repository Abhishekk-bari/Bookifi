import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:5000/submit-form'; // Backend endpoint URL
  private fetchUrl = 'http://localhost:5000/api/bookings'; //for fetch booking from backend
  constructor(private http: HttpClient) {}

  //submit form data
  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'json' });
  }

  // Fetch booking data with optional search term
  fetchBooking(search: string = ''): Observable<any> {
    const url = `${this.fetchUrl}?name=${encodeURIComponent(search)}`;
    return this.http.get(url);
  }

}