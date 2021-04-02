import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.interface';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Observable<Student[]>;

  private studentsCollection: AngularFirestoreCollection<Student>;

  constructor(private readonly afs: AngularFirestore) {
    this.studentsCollection = afs.collection<Student>('students');
    this.getStudents();
   }

   onDeleteStudent(stuId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.studentsCollection.doc(stuId).delete();
         resolve(result);
       } catch (err) {
         reject(err.message);
       }
     });
   }

   onSaveStudent(student: Student, stuId: string): Promise<void>{
     return new Promise( async (resolve, reject) => {
       try{
         const id = stuId || this.afs.createId();
         const data = { id, ...student };
         const result = await this.studentsCollection.doc(id).set(data);
         resolve(result);
       } catch (err) {
         reject(err.message);
       }
     });
   }

   private getStudents(): void{
     this.students = this.studentsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Student))
     );
   }
}
