
// const student={   //------------------------------direct way of  creating obj---------------------------------
//     fulname:"priya katare",
//     marks:62.12,
//     printmarks: function(){
//    console.log("marks=",this.marks);//---this ka matlab hai vhi obj in js(student.maks)
//     },
    
// }
// console.log(student);  //---------------{fulname: 'priya katare', marks: 62.12, printmarks: ƒ}
// console.log(student.fulname) //-------------priya katare
// console.log(student.printmarks());//--------------marks= 62.12

//------------------------------{prototype }------------------------

//prototype is object itself
// this have special metod and properties

// let arr=['mengo','banana','orenge'];
// console.log(arr.push("lichi"));//--------------properties and function are by default inheret in prototype by making object
            
// const employee1={
//     texrate(){
//         console.log("tex rate is 10%");
//     }
// }
// const priya = {
//     salary:5000,
// }
//            priya.__proto__=employee1;    //---------------to inheret employee fun in proytotype
//            console.log(priya);
//            console.log(priya.texrate);//------tex rate is 10%

// const employee2={
//     texrate(){
//         console.log("tex rate is 10%");
//     }
// }
// const priya1 = {
//     salary:5000,
//     texrate(){
//         console.log("tex rate is 20%");
//     }
// }
//            priya1.__proto__=employee2;   //-----------if prototype and object having same method then object metode will we use
//            console.log(priya1.texrate);//-----------tex rate is 20%

//-----------------------------class(blueprint or template for creating object)-------------
// class is a single template to creat different obj
// class car{
    //  constructor(brand){                   //------------work done in inisilization time------------------
        // console.log("creating new obj");
//         this.brandnew=brand;
//     }
//     start(){
//         console.log("start");
//     }
//      stop(){
//         console.log("stop");
//     }
//     
// }
// let fortuner=new car();
// console.log(fortuner.start);
// 
// console.log(fortuner);//------------------car { brandnew: 'fortuner' }

//-----------------------constructor is a special method autometically create by creating obj---------------------------------------

//----------------------inheritence(inherit properties from parent to child)------------------------
// class person{
    //    constructor(){                  
        
    //     this.species="homo species";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
    //    work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("solve problem");
//     }
// }
// let priya=new engineer();
// console.log(priya.eat());//---------------eat
//----------if parent and child having same class then child class function run

//------------------------superkeyward(to inheret properties  child to perent)---------------------
// class person{
//        constructor(){                  
//           console.log("enter parent constructor");
//         this.species="homo species";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
    
// }
// class engineer extends person{
//      constructor(branch){                  
//         console.log("enter child constructor");
//         super();
//         this.branch=branch;
//           console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problem");
//     }
// }
// let priya=new engineer("ec");

// console.log("enter child constructor");
// console.log("enter parent constructor");
// console.log("exit child constructor");
// class person{
//        constructor(name){                  
//          this.species="homo species";
//         this.name=name;

//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
    
// }
// class engineer extends person{
//      constructor(branch){                  
        
//         super(name);
//         this.branch=branch;
         
//     }
//     work(){
//         console.log("solve problem");
//     }
// }
// let engobj=new engineer("priya");

// console.log(engobj.eat);
let data="secret info";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    veiwsdata(){
        console.log("data=",data);
    }

}
let student1=new user("priya","priya@gmail.com");//-----------student1user {name: 'priya', email: 'priya@gmail.com'}


class admin extends user {
    constructor(name,email) {
        super(name,email);
            
        }
        eaditdata(){
            data="some new value";
        }
    }

let admin1=new admin("admin","admine@gmail.com");