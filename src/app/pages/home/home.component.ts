import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pauseIntervalBlog = false;
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

  softSkills = [
    'pensamiento crítico',
    'compromiso',
    'trabajo en equipo',
    'creatividad',
    'resolución de problemas',
    'gestión del tiempo',
    'positividad',
    'liderazgo',
    'empatía',
    'organización',
  ];

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.pauseIntervalBlog);

      if (!this.pauseIntervalBlog) {
        this.nextBlog();
      }
    }, 3000);
  }

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

  nextBlog() {
    const $slider = document.getElementById('slider');

    let $sliderSectionFirst = document.querySelectorAll('.slider__imgs')[0];

    $slider!.style.marginLeft = '-200%';
    $slider!.style.transition = 'margin-left 1s';
    setTimeout(() => {
      $slider!.style.transition = 'none';
      $slider!.insertAdjacentElement('beforeend', $sliderSectionFirst);
      $slider!.style.marginLeft = '-100%';
    }, 1000);
  }

  prevBlog() {
    const $slider = document.getElementById('slider');
    let sliderSection = document.querySelectorAll('.slider__imgs');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    $slider!.style.marginLeft = '0%';
    $slider!.style.transition = 'margin-left 1s';
    setTimeout(() => {
      $slider!.style.transition = 'none';
      $slider!.insertAdjacentElement('afterbegin', sliderSectionLast);
      $slider!.style.marginLeft = '-100%';
    }, 1000);
  }

  arrowNextBlog() {
    this.pauseIntervalBlog = true;
    this.nextBlog();
    setTimeout(() => {
      this.pauseIntervalBlog = false;
    }, 6000);
  }

  arrowPrevBlog() {
    this.pauseIntervalBlog = true;
    this.prevBlog();
    setTimeout(() => {
      this.pauseIntervalBlog = false;
    }, 6000);
  }
}
