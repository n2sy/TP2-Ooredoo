import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = [];
  constructor(
    private listCourseSer: ListCoursesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.tab = this.listCourseSer.getAllCourses();
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (result) => {
        console.log(result[1]['address']['geo']['lat']);
        console.log(result[1].address.geo.lat);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Flux terminé !');
      }
    );
  }
}
