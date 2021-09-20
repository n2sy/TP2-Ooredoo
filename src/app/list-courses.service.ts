import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/480px-Angular_full_color_logo.svg.png',
      keywords: ['Components', 'Directives', 'Pipes'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Selim Horri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png',
      keywords: ['Java', 'Activités', 'Layout'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Badreddine Aouidi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords: ['Mobile', 'Webview', 'Typescript'],
    },
  ];

  constructor() {}

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }
}
