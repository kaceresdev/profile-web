import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const logo = document.getElementById('logo');
      logo!.classList.add('spinner-logo');
      setTimeout(() => {
        logo!.classList.remove('spinner-logo');
      }, 500);
    }
  }
}
