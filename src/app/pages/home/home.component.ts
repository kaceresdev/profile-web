import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollToElement(e: string): void {
    const pixelesGap = 60;
    const element = document.getElementById(e);
    const verticalOffset = element!.getBoundingClientRect().top - pixelesGap;
    window.scrollBy({ top: verticalOffset, left: 0, behavior: 'smooth' });
  }
}
