import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse = {
    id: 1,
    title: 'Angular',
    author: 'Nidhal Jelassi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/480px-Angular_full_color_logo.svg.png',
    keywords: ['Components', 'Directives', 'Pipes'],
  };
  constructor() {}

  ngOnInit() {}
}
