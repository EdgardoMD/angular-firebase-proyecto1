(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UrDz:function(t,r,e){"use strict";e.r(r),e.d(r,"RegisterModule",function(){return m});var o=e("ofXK"),n=e("tyNb"),i=e("mrSG"),b=e("3Pt+"),s=e("N/25"),c=e("fXoL");const a=function(){return["/login"]},u=[{path:"",component:(()=>{class t{constructor(t,r){this.authSvc=t,this.router=r,this.registerForm=new b.e({email:new b.c(""),password:new b.c("")})}ngOnInit(){}onRegister(){return Object(i.b)(this,void 0,void 0,function*(){const{email:t,password:r}=this.registerForm.value;try{(yield this.authSvc.register(t,r))&&this.router.navigate(["/login"])}catch(e){console.log(e)}})}}return t.\u0275fac=function(r){return new(r||t)(c.Lb(s.a),c.Lb(n.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-register"]],features:[c.zb([s.a])],decls:21,vars:3,consts:[[1,"row"],[1,"col-md-6","mx-auto","mt-5"],[1,"card-body"],[1,"text-center"],[3,"formGroup","ngSubmit"],["for","email"],[1,"form-group"],["type","email","formControlName","email",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btb","btn-dark","btn-lg","btn-block"],[1,"form-group","mt-3"],[3,"routerLink"]],template:function(t,r){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"legend",3),c.jc(4,"Registro"),c.Nb(),c.Ob(5,"form",4),c.Vb("ngSubmit",function(){return r.onRegister()}),c.Ob(6,"label",5),c.jc(7,"Email"),c.Nb(),c.Ob(8,"div",6),c.Mb(9,"input",7),c.Nb(),c.Ob(10,"div",6),c.Ob(11,"label",8),c.jc(12,"Password"),c.Nb(),c.Mb(13,"input",9),c.Nb(),c.Ob(14,"button",10),c.jc(15,"Registro"),c.Nb(),c.Ob(16,"div",11),c.Ob(17,"p"),c.jc(18," \xbfYa tienes una cuenta? "),c.Ob(19,"a",12),c.jc(20,"Login"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.Ab(5),c.ac("formGroup",r.registerForm),c.Ab(14),c.ac("routerLink",c.bc(2,a)))},directives:[b.l,b.i,b.f,b.a,b.h,b.d,n.b],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[n.c.forChild(u)],n.c]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[o.c,l,b.j]]}),t})()}}]);