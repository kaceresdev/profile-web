import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() wasSent: boolean;

  ngOnInit(): void {
    document.getElementById('modal')!.addEventListener('click', function (event) {
      if (event.target === this) {
        this.style.display = 'none';
      }
    });
  }
}
