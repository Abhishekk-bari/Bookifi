import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  bookings: any[] = [];

  constructor(private formService: FormService) {}
    ngOnInit(): void {
      this.loadBookings();
    }

loadBookings(): void {
  this.formService.fetchBooking().subscribe(
  (data) => {
    this.bookings = data;
  },
  (error) => {
    console.error('Error fetching bookings', error);
  }
  )
}
}
