import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  HostListener,
} from '@angular/core';

import { gsap } from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed 'styleUrls' typo
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef;
  @ViewChild('scrollDiv') scrollDivRef!: ElementRef; // Reference to the div to hide
  private scrollInterval: any;
  private lastScrollTop: number = 0;

  ngAfterViewInit() {
    const slider = this.sliderRef.nativeElement;
    const splitText = new SplitType('.text-animation', { types: 'chars' });


    gsap.from(splitText.chars, {
      duration: 1.0,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: 'back.out(10)'
    });
    gsap.from(splitText.chars, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: 'power2.out'
    });

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
    }, 10); // Adjust speed by changing interval time
  }

  // Listener for scroll event
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down: hide the div
      this.scrollDivRef.nativeElement.style.opacity = '0';
      this.scrollDivRef.nativeElement.style.transform = 'translateY(-50px)';
      this.scrollDivRef.nativeElement.style.transition = 'opacity 0.5s, transform 0.5s';
    } else {
      // Scrolling up: show the div
      this.scrollDivRef.nativeElement.style.opacity = '1';
      this.scrollDivRef.nativeElement.style.transform = 'translateY(0)';
    }

    this.lastScrollTop = scrollTop;
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clean up interval on component destroy
  }
}
