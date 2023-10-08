import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  toggleNavIcon() {
    const nav = document.getElementById('nav-icon');
    const menu = document.getElementById('menu-items');
    nav!.classList.toggle('open');
    menu!.classList.toggle('show');
  }

  easterEgg() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const logo = document.getElementById('logo');
    logo!.classList.add('spinner-logo');
    setTimeout(() => {
      logo!.classList.remove('spinner-logo');
    }, 500);
  }
}
