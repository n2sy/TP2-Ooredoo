import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseServ: ListCoursesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        console.log(p.get('id'));
        this.selectedCourse = this.courseServ.getCourseById(p.get('id'));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
