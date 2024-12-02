import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  bookings: any[] = [];
  search: string = '';  //store search term

  constructor(private formService: FormService ,  private http: HttpClient) {}
    ngOnInit(): void {
      this.loadBookings();
    }

loadBookings(): void {
  this.formService.fetchBooking(this.search).subscribe(
  (data) => {
    this.bookings = data;
  },
  (error) => {
    console.error('Error fetching bookings', error);
  }
  );
}
onSearchChange(): void {
  this.loadBookings();
}
}
