import { Injectable } from '@angular/core';

import { IPost } from 'src/app/interfaces/posts.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getDataFirebase(objectName: string): Promise<IPost[]> {
    const response = await fetch(
      'https://kaceresweb-default-rtdb.europe-west1.firebasedatabase.app/' + objectName + '.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await response.json();
  }

  // Firebase API calls
  // constructor(private database: Database) {}
  // getPosts(): any[] {
  //   const starCountRef = ref(this.database, 'posts/');
  //   onValue(starCountRef, (snapshot) => {
  //     return snapshot.val();
  //   });
  // }
}
