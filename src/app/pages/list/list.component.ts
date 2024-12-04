import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  bookings: any[] = [];
  search: string = '';  //store search term

  

  constructor(private formService: FormService ,  private http: HttpClient, private toastr: ToastrService) {}
    
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

// Delete booking
deleteBooking(id: string): void {
  // Using SweetAlert2 for a better confirmation dialog
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to delete this booking?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.formService.deleteBooking(id).subscribe(
        () => {
          this.toastr.success('Booking deleted successfully!');
          this.loadBookings(); // Reload data after deletion
        },
        (error) => {
          console.error('Error deleting booking:', error);
          this.toastr.error('Failed to delete booking. Please try again.');
        }
      );
    }
  });
}

// Update booking
updateBooking(booking: any): void {
  const updatedData = {
    ...booking,
    name: prompt('Update Name:', booking.name) || booking.name,
    email: prompt('Update Email:', booking.email) || booking.email,
    number: prompt('Update Number:', booking.number) || booking.number,
    message: prompt('Update Message:', booking.message) || booking.message
  };

  this.formService.updateBooking(booking._id, updatedData).subscribe(
    () => {
      alert('Booking updated successfully!');
      this.loadBookings(); // Reload data after update
    },
    (error) => {
      console.error('Error updating booking:', error);
    }
  );
}
}
