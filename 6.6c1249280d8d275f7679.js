(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UrDz:function(t,r,o){"use strict";o.r(r),o.d(r,"RegisterModule",function(){return l});var e=o("ofXK"),n=o("tyNb"),i=o("mrSG"),c=o("3Pt+"),b=o("N/25"),s=o("fXoL");const a=function(){return["/login"]},u=[{path:"",component:(()=>{class t{constructor(t,r){this.authSvc=t,this.router=r,this.registerForm=new c.e({email:new c.c(""),password:new c.c("")})}ngOnInit(){}onRegister(){return Object(i.b)(this,void 0,void 0,function*(){const{email:t,password:r}=this.registerForm.value;try{(yield this.authSvc.register(t,r))&&this.router.navigate(["/login"])}catch(o){console.log(o)}})}}return t.\u0275fac=function(r){return new(r||t)(s.Lb(b.a),s.Lb(n.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-register"]],features:[s.zb([b.a])],decls:21,vars:3,consts:[[1,"row"],[1,"col-md-6","mx-auto","mt-5"],[1,"card-body"],[1,"text-center"],[3,"formGroup","ngSubmit"],["for","email"],[1,"form-group"],["type","email","formControlName","email",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btb","btn-dark","btn-lg","btn-block"],[1,"form-group","mt-3"],[3,"routerLink"]],template:function(t,r){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.Ob(3,"legend",3),s.mc(4,"Registro"),s.Nb(),s.Ob(5,"form",4),s.Vb("ngSubmit",function(){return r.onRegister()}),s.Ob(6,"label",5),s.mc(7,"Email"),s.Nb(),s.Ob(8,"div",6),s.Mb(9,"input",7),s.Nb(),s.Ob(10,"div",6),s.Ob(11,"label",8),s.mc(12,"Password"),s.Nb(),s.Mb(13,"input",9),s.Nb(),s.Ob(14,"button",10),s.mc(15,"Registro"),s.Nb(),s.Ob(16,"div",11),s.Ob(17,"p"),s.mc(18," \xbfYa tienes una cuenta? "),s.Ob(19,"a",12),s.mc(20,"Login"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.Ab(5),s.cc("formGroup",r.registerForm),s.Ab(14),s.cc("routerLink",s.ec(2,a)))},directives:[c.l,c.i,c.f,c.a,c.h,c.d,n.b],styles:[".card-body[_ngcontent-%COMP%]{background-color:olive;color:#000;font-size:large}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[n.c.forChild(u)],n.c]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[e.c,m,c.j]]}),t})()}}]);