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
}
