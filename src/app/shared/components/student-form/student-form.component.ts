import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/pages/students/students.service';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  student: Student;
  studentForm: FormGroup;
  private isEmail =/\S+@\S+\.\S+/;

  constructor(private router: Router, private fb: FormBuilder, private studentsSvc: StudentsService) {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    if (typeof this.student === 'undefined'){
      this.router.navigate(['new']);
    }else{
      this.studentForm.patchValue(this.student);
    }
  }

  onSave(): void {
    console.log('Saved', this.studentForm.value);
    if (this.studentForm.valid){
      const student = this.studentForm.value;
      const studentId = this.student?.id || null;
      this.studentsSvc.onSaveStudent(student, studentId);
      this.studentForm.reset();
    }
  }

  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  isValidField(field: string): string {
    const validatedField = this.studentForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      birthdayDate: ['', [Validators.required]],
    });
  }

}
