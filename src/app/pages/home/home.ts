import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef<HTMLSpanElement>;
  private typed?: Typed;

  ngAfterViewInit() {
    this.initTyped();
  }

  initTyped() {
    if (this.typed) {
      this.typed.destroy();
    }
    this.typed = new Typed(this.typedElement.nativeElement, {
      strings: ['Ingeniero De Sistemas', 'Backend Developer', 'Frontend Developer', 'Freelancer'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });
  }

  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
