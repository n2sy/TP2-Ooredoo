import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private courseServ: ListCoursesService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        console.log(p['id']);
        this.selectedCourse = this.courseServ.getCourseById(p['id']);
      },
      (error) => {
        console.log(error);
      }
    );
    // this.activatedRoute.paramMap.subscribe(
    //   (p: ParamMap) => {
    //     console.log(p.get('id'));
    //     this.selectedCourse = this.courseServ.getCourseById(p.get('id'));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  async deleteCourse() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'You really want to delete this course ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.courseServ.deleteThisCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
