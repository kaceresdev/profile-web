import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  isCelular: boolean;
  menuItems = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Contacto',
      route: '/contact',
    },
    {
      title: 'Blog',
      route: '/blog',
    },
  ];
  lastScroll = 0;

  constructor(public router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 1024) {
      this.isCelular = true;
      window.removeEventListener('scroll', this.manageShowingNav);
    } else {
      this.isCelular = false;
      window.addEventListener('scroll', this.manageShowingNav);
    }
  }

  ngOnInit() {
    this.isCelular = window.screen.width < 1024 ? true : false;
    if (!this.isCelular) {
      window.addEventListener('scroll', this.manageShowingNav);
    }
  }

  manageShowingNav() {
    const menuBar = document.getElementById('menu-bar');
    const currentScroll = window.scrollY;

    if (currentScroll <= 35) {
      menuBar!.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > this.lastScroll && !menuBar!.classList.contains('scroll-down')) {
      // down
      menuBar!.classList.remove('scroll-up');
      menuBar!.classList.add('scroll-down');
    } else if (currentScroll < this.lastScroll && menuBar!.classList.contains('scroll-down')) {
      // up
      menuBar!.classList.remove('scroll-down');
      menuBar!.classList.add('scroll-up');
    }
    this.lastScroll = currentScroll;
  }

  toggleNavIcon() {
    const nav = document.getElementById('nav-icon');
    const menu = document.getElementById('menu-items');
    nav!.classList.toggle('open');
    menu!.classList.toggle('show');
    menu!.style.display = menu!.style.display === 'block' ? 'none' : 'block';

    // Evitar el desplazamiento del contenido de la página
    document.body.style.overflow = menu!.style.display === 'block' ? 'hidden' : 'auto';
  }

  easterEgg() {
    if (!document.getElementById('menu-items')?.classList.contains('show')) {
      this.toTop();
      const logo = document.getElementById('logo');
      logo!.classList.add('spinner-logo');
      setTimeout(() => {
        logo!.classList.remove('spinner-logo');
      }, 500);
    }
  }

  toTop(route?: string) {
    if (this.router.url === route || !route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }
}
