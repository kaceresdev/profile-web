import { Component } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private database: Database) {}
  prueba() {
    const starCountRef = ref(this.database, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('DATA: ', data);
    });
  }
}
