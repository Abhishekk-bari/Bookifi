import { Component, AfterViewInit, ElementRef  } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})

export class TestimonialComponent implements AfterViewInit {
  
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    const galleryText = this.elementRef.nativeElement.querySelector('h1');
    const descriptionText = this.elementRef.nativeElement.querySelector('p');
  
    // Animate "Gallery" text
    gsap.fromTo(
      galleryText,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: galleryText,
          start: 'top 80%', // Trigger when the element is 80% in the viewport
          toggleActions: 'play none none none', // Play animation only on scroll
        },
      }
    );
  
    // Animate description text
    gsap.fromTo(
      descriptionText,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: descriptionText,
          start: 'top 80%',
          toggleActions: 'play none none none', // Play animation only on scroll
        },
      }
    );
  }
}