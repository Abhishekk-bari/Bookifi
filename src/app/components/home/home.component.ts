import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy  {
  @ViewChild('slider') sliderRef!: ElementRef;
  private scrollInterval: any;

  ngAfterViewInit() {
    const slider = this.sliderRef.nativeElement;

    // Clone slides for infinite effect
    const slides = Array.from(slider.children) as HTMLElement[];
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });

    // Start auto-scroll
    this.scrollInterval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        // Reset scroll position to create infinite effect
        slider.scrollLeft = 0;
      }
      slider.scrollBy({ left: 10, behavior: 'smooth' }); // Smooth scroll by 10px for fast speed
    },10); // Adjust speed by changing interval time
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clean up interval on component destroy
  }
}