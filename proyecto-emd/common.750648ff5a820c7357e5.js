(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{wimU:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var o=n("3Pt+"),r=n("fXoL"),i=n("tyNb"),s=n("zGTW"),a=n("ofXK");function d(t,e){1&t&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido. "),r.Nb())}function u(t,e){1&t&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido. "),r.Nb())}function l(t,e){1&t&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido. "),r.Nb())}function c(t,e){1&t&&(r.Ob(0,"span"),r.jc(1," Ingrese un formato de email v\xe1lido. "),r.Nb())}function b(t,e){1&t&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido. "),r.Nb())}let m=(()=>{class t{constructor(t,e,n){var o,r;this.router=t,this.fb=e,this.studentsSvc=n,this.isEmail=/\S+@\S+\.\S+/;const i=this.router.getCurrentNavigation();this.student=null===(r=null===(o=null==i?void 0:i.extras)||void 0===o?void 0:o.state)||void 0===r?void 0:r.value,this.initForm()}ngOnInit(){void 0===this.student?this.router.navigate(["new"]):this.studentForm.patchValue(this.student)}onSave(){var t;if(console.log("Saved",this.studentForm.value),this.studentForm.valid){const e=(null===(t=this.student)||void 0===t?void 0:t.id)||null;this.studentsSvc.onSaveStudent(this.studentForm.value,e),this.studentForm.reset()}}onGoBackToList(){this.router.navigate(["list"])}isValidField(t){const e=this.studentForm.get(t);return!e.valid&&e.touched?"is-invalid":e.touched?"is-valid":""}initForm(){this.studentForm=this.fb.group({name:["",[o.k.required]],lastName:["",[o.k.required]],email:["",[o.k.required,o.k.pattern(this.isEmail)]],birthdayDate:["",[o.k.required]]})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(i.a),r.Lb(o.b),r.Lb(s.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-student-form"]],decls:24,vars:14,consts:[[1,"mt-3","col-md-8","offset-md-2",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["type","text","placeholder","Nombre","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","placeholder","Apellido","formControlName","lastName",1,"form-control"],["type","text","placeholder","Email","formControlName","email",1,"form-control"],["type","text","placeholder","Fecha nacimiento ej:01/01/1990","formControlName","birthdayDate",1,"form-control"],["type","submit",1,"btn","bg-dark","btn-block","text-light"],["type","button",1,"btn","btn-primary","mt-2",3,"click"]],template:function(t,e){1&t&&(r.Ob(0,"form",0),r.Vb("ngSubmit",function(){return e.onSave()}),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Mb(3,"input",3),r.Ob(4,"div",4),r.hc(5,d,2,0,"span",5),r.Nb(),r.Nb(),r.Ob(6,"div",2),r.Mb(7,"input",6),r.Ob(8,"div",4),r.hc(9,u,2,0,"span",5),r.Nb(),r.Nb(),r.Nb(),r.Ob(10,"div",1),r.Ob(11,"div",2),r.Mb(12,"input",7),r.Ob(13,"div",4),r.hc(14,l,2,0,"span",5),r.hc(15,c,2,0,"span",5),r.Nb(),r.Nb(),r.Ob(16,"div",2),r.Mb(17,"input",8),r.Ob(18,"div",4),r.hc(19,b,2,0,"span",5),r.Nb(),r.Nb(),r.Nb(),r.Ob(20,"button",9),r.jc(21,"Guardar"),r.Nb(),r.Nb(),r.Ob(22,"button",10),r.Vb("click",function(){return e.onGoBackToList()}),r.jc(23,"Volver"),r.Nb()),2&t&&(r.ac("formGroup",e.studentForm),r.Ab(3),r.Cb(e.isValidField("name")),r.Ab(2),r.ac("ngIf",null==e.studentForm.get("name").errors?null:e.studentForm.get("name").errors.required),r.Ab(2),r.Cb(e.isValidField("lastName")),r.Ab(2),r.ac("ngIf",null==e.studentForm.get("lastName").errors?null:e.studentForm.get("lastName").errors.required),r.Ab(3),r.Cb(e.isValidField("email")),r.Ab(2),r.ac("ngIf",null==e.studentForm.get("email").errors?null:e.studentForm.get("email").errors.required),r.Ab(1),r.ac("ngIf",null==e.studentForm.get("email").errors?null:e.studentForm.get("email").errors.pattern),r.Ab(2),r.Cb(e.isValidField("birthdayDate")),r.Ab(2),r.ac("ngIf",null==e.studentForm.get("birthdayDate").errors?null:e.studentForm.get("birthdayDate").errors.required))},directives:[o.l,o.i,o.f,o.a,o.h,o.d,a.j],styles:[""]}),t})()},zGTW:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("mrSG"),r=n("lJxs"),i=n("fXoL"),s=n("I/3d");let a=(()=>{class t{constructor(t){this.afs=t,this.studentsCollection=t.collection("students"),this.getStudents()}onDeleteStudent(t){return new Promise((e,n)=>Object(o.b)(this,void 0,void 0,function*(){try{const n=this.studentsCollection.doc(t).delete();e(n)}catch(o){n(o.message)}}))}onSaveStudent(t,e){return new Promise((n,r)=>Object(o.b)(this,void 0,void 0,function*(){try{const o=e||this.afs.createId(),r=Object.assign({id:o},t),i=yield this.studentsCollection.doc(o).set(r);n(i)}catch(o){r(o.message)}}))}getStudents(){this.students=this.studentsCollection.snapshotChanges().pipe(Object(r.a)(t=>t.map(t=>t.payload.doc.data())))}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(s.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);