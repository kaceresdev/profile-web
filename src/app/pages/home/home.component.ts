import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  technologiesSlider = [
    {
      imgSrc: 'assets/img/angular-logo.png',
      alt: 'Angular logo',
    },
    {
      imgSrc: 'assets/img/typeScript-logo.png',
      alt: 'TypeScript logo',
    },
    {
      imgSrc: 'assets/img/javascript-logo.png',
      alt: 'JavaScript logo',
    },
    {
      imgSrc: 'assets/img/nodejs-logo.png',
      alt: 'NodeJS logo',
    },
    {
      imgSrc: 'assets/img/html-logo.png',
      alt: 'HTML logo',
    },
    {
      imgSrc: 'assets/img/css-logo.png',
      alt: 'CSS logo',
    },
    {
      imgSrc: 'assets/img/scss-logo.png',
      alt: 'SCSS logo',
    },
    {
      imgSrc: 'assets/img/mongoDB-logo.png',
      alt: 'MongoDB logo',
    },
    {
      imgSrc: 'assets/img/firebase-logo.png',
      alt: 'Firebase logo',
    },
    {
      imgSrc: 'assets/img/markoJS-logo.png',
      alt: 'MarkoJS logo',
    },
    {
      imgSrc: 'assets/img/github-logo.png',
      alt: 'Github logo',
    },
    {
      imgSrc: 'assets/img/db2-logo.png',
      alt: 'DB2 logo',
    },
  ];

  ngOnInit(): void {}

  sliderPause(idElement: string) {
    const sliderElement = document.getElementById(idElement);
    sliderElement!.style.animationPlayState = 'paused';
    setTimeout(() => {
      sliderElement!.style.animationPlayState = 'running';
    }, 2000);
  }

  scrollToElement(e: string): void {
    const pixelesGap = 70;
    const element = document.getElementById(e);
    const verticalOffset = element!.getBoundingClientRect().top - pixelesGap;
    window.scrollBy({ top: verticalOffset, left: 0, behavior: 'smooth' });
  }
}
