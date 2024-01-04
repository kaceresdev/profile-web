import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/posts.model';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getDataFirebase('posts').then((data: IPost[]) => {
      console.log('POSTS: ', data);

      this.posts = data;
    });
  }
}
