import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student.interface';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  student: Student = null;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private studentsSvc: StudentsService) {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if (typeof this.student === 'undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state.value = this.student;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.studentsSvc.onDeleteStudent(this.student?.id);
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

}
